resource "random_id" "bucket_id" {
  byte_length = 8
}

resource "aws_s3_bucket" "s3_bucket" {
  bucket = "${var.app_bucket_name}-${random_id.bucket_id.hex}"

  force_destroy = true
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  bucket = aws_s3_bucket.s3_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "website_config" {
  bucket = aws_s3_bucket.s3_bucket.bucket
  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_cors_configuration" "bucket_cors" {
  bucket = aws_s3_bucket.s3_bucket.bucket
  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["*"]
    max_age_seconds = 5000
  }
}

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
  for_each     = fileset("../../dist/", "*.html")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "../../dist/${each.value}"
  content_type = "text/html"
  etag         = filemd5("../../dist/${each.value}")
  acl          = "public-read"
}

resource "aws_s3_object" "object_javascript" {
  for_each     = fileset("../../dist/", "*.js")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "../../dist/${each.value}"
  content_type = "application/x-javascript"
  etag         = filemd5("../../dist/${each.value}")
  acl          = "public-read"
}

resource "aws_s3_object" "object_font_woff" {
  for_each = fileset("../../dist/", "*.woff")
  bucket   = aws_s3_bucket.s3_bucket.bucket
  key      = each.value
  source   = "../../dist/${each.value}"
  etag     = filemd5("../../dist/${each.value}")
  acl      = "public-read"
}

resource "aws_s3_object" "object_css" {
  for_each = fileset("../../dist/", "*.css")
  bucket   = aws_s3_bucket.s3_bucket.bucket
  key      = each.value
  source   = "../../dist/${each.value}"
  etag     = filemd5("../../dist/${each.value}")
  acl      = "public-read"
}
