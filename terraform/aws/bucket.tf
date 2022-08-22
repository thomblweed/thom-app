resource "random_id" "bucket_id" {
  byte_length = 8
}

resource "aws_s3_bucket" "s3_bucket" {
  bucket = "${var.app_bucket_name}-${random_id.bucket_id.hex}"

  force_destroy = true
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  bucket = aws_s3_bucket.s3_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.s3_bucket.bucket
  index_document {
    suffix = var.root_object
  }
}

# resource "aws_s3_bucket_cors_configuration" "bucket_cors" {
#   bucket = aws_s3_bucket.s3_bucket.bucket
#   cors_rule {
#     allowed_headers = ["Authorization", "Content-Length"]
#     allowed_methods = ["GET", "POST"]
#     allowed_origins = ["*"]
#     max_age_seconds = 5000
#   }
# }

data "aws_iam_policy_document" "iam_policy" {
  statement {
    sid    = "thom_app_policy"
    effect = "Allow"

    resources = [
      aws_s3_bucket.s3_bucket.arn,
      "${aws_s3_bucket.s3_bucket.arn}/*"
    ]

    actions = ["s3:GetObject"]

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.s3_bucket.id
  policy = data.aws_iam_policy_document.iam_policy.json
}

# bucket objects
resource "aws_s3_object" "object_html" {
  for_each     = fileset("${var.source_directory}/", "*.html")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "${var.source_directory}/${each.value}"
  content_type = "text/html"
  etag         = filemd5("${var.source_directory}/${each.value}")
  acl          = "private"
}

resource "aws_s3_object" "object_javascript" {
  for_each     = fileset("${var.source_directory}/", "*.js")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "${var.source_directory}/${each.value}"
  content_type = "application/x-javascript"
  etag         = filemd5("${var.source_directory}/${each.value}")
  acl          = "private"
}

resource "aws_s3_object" "object_font_woff" {
  for_each     = fileset("${var.source_directory}/", "*.woff")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "${var.source_directory}/${each.value}"
  content_type = "font/woff"
  etag         = filemd5("${var.source_directory}/${each.value}")
  acl          = "private"
}

resource "aws_s3_object" "object_css" {
  for_each     = fileset("${var.source_directory}/", "*.css")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "${var.source_directory}/${each.value}"
  content_type = "text/css"
  etag         = filemd5("${var.source_directory}/${each.value}")
  acl          = "private"
}
