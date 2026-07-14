# AWS Serverless Web Platform

        This project documents my journey of building a fully serverless web application on
        AWS. Rather than creating everything at once, I develop the platform with one feature at a time, with each addition introducing a new cloud concept

## Features

- Static website hosted on S3
- Content delivery through CloudFront
- Backend by AWS Lambda
- Visitor counter stored in DynamoDB
- Unique visitor tracking using browser-generated UUIDs
- Contact form using API Gateway, Lambda, and Amazon SES
- API built with API Gateway
- Monitoring through Amazon CloudWatch
## Architecture

```
Browser
    |
CloudFront
    |
Private S3 Bucket
    |
API Gateway
   / \
  /   \
Visitor Counter Lambda      Contact Lambda
          |                      |
      DynamoDB              Amazon SES
          \                      /
           \                    /
            \                  /
             \                /
              Amazon CloudWatch
```

## Tech stack

- HTML
- CSS
- JavaScript
- Amazon S3
- Amazon CloudFront
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- Amazon SES
- AWS IAM
- Amazon Cloudwatch
## Roadmap

- v1.0 - Static Hosting and Visitor Counter
- v1.1 - Unique Visitor Tracking
- v1.2 - Contact API
- v1.3 - CloudWatch Monitoring
- v1.4 - CI/CD Pipeline
- v2.0 - Terraform
- v2.1 - Custom Domain and HTTPS

## Unique Visitor tracking

The original visitor counter increased every time the page was refreshed. Version 1.1 introduced a browser-generated UUID that is stored in the browser's `localStorage`. on every visit the UUID is sent to lambda, where DynamoDB checks whether it has already been recorded. if the UUID exists, the current visitor count is returned without incrementing it. otherwise, the UUID is stored and the visitor count is increased by one.

The original design considered using IP addresses with SHA-256 hashing to preserve visitor privacy. this approach was rejected because multiple users can share the same public IP address. A browser-generated UUID provides a more reliable approximation of unique visitors without storing IP addresses.

## Contact API

Version 1.2 introduced a contact form that allows visitors to send messages directly from the website. the form validates user input before sending the message through API Gateway to lambda, where Amazon SES sends it directly to my email.

## Cloudwatch Monitoring

Version 1.3 introduced Cloudwatch for monitoring the application. both lambda functions automatically send logs and metrics to Cloudwatch making it easier to monitor requests, identify errors, and troubleshoot issues during development.

## Run locally

Clone the repository:

```bash
git clone https://github.com/Alii7d/aws-serverless-web-platform.git
```

Open the project in Visual Studio Code and run it using the Live Server extension.

## Author

Ali Al-Muzaini