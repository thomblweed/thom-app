# thom app

## Prerequisites

- terraform cli (terraform cloud account)
- aws cli

## Setup

### Terraform

Initialise the backend state with Terraform Cloud and follow prompted messages

```
cd terraform/backend
terraform login
```

Create input variables and initialise

```
touch input.auto.tfvars
```

Copy and paste the below content to the input.auto.tfvars file and update your values in the placeholders

```
bucket_name = "aws s3 bucket name value"
dynamodb_table_name = "aws dynamo table name value"
```

Initialise and change workspace to local. After running the below command make sure to change the following workspace settings via the Terraform Cloud web UI at https://app.terraform.io/.
Go to the workspace, settings > general > execution mode > change from `remote` to `local`

```
terraform init
```

Validate and plan

```
terraform validate
terraform plan -var-file input.auto.tfvars -out out.tfplan
```

If all ok then apply

```
terraform apply "out.tfplan"
cd ../../
```
