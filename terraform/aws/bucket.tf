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

resource "aws_s3_object" "object_html" {
  for_each     = fileset("../../public/", "*.html")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "../../public/${each.value}"
  content_type = "text/html"
  etag         = filemd5("../../public/${each.value}")
  acl          = "public-read"
}

resource "aws_s3_object" "object_javascript" {
  for_each     = fileset("../../public/", "*.js")
  bucket       = aws_s3_bucket.s3_bucket.bucket
  key          = each.value
  source       = "../../public/${each.value}"
  content_type = "application/x-javascript"
  etag         = filemd5("../../public/${each.value}")
  acl          = "public-read"
}

resource "aws_s3_object" "object_font_woff" {
  for_each = fileset("../../public/", "*.woff")
  bucket   = aws_s3_bucket.s3_bucket.bucket
  key      = each.value
  source   = "../../public/${each.value}"
  etag     = filemd5("../../public/${each.value}")
  acl      = "public-read"
}

resource "aws_s3_object" "object_css" {
  for_each = fileset("../../public/", "*.css")
  bucket   = aws_s3_bucket.s3_bucket.bucket
  key      = each.value
  source   = "../../public/${each.value}"
  etag     = filemd5("../../public/${each.value}")
  acl      = "public-read"
}
