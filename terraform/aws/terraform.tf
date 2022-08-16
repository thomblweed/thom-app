terraform {
  required_version = "1.2.7"
  backend "s3" {
    bucket               = "terraform-thom-app-backend"
    key                  = "terraform.tfstate"
    region               = "eu-west-2"
    workspace_key_prefix = "thom-app"
    dynamodb_table       = "terraform-state-thom-app"
    encrypt              = true
  }
  required_providers {
    aws = {
      version = "~> 4.26.0"
      source  = "hashicorp/aws"
    }
    random = {
      version = "3.3.2"
      source  = "hashicorp/random"
    }
    archive = {
      version = "~> 2.2.0"
      source  = "hashicorp/archive"
    }
  }
}
