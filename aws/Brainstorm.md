Github CI pipeline with aws
https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-github.html

One-time manual command 
aws codestar-connections create-connection --provider-type GitHub --connection-name petProjectConnection

Result: 
{
    "ConnectionArn": "arn:aws:codestar-connections:eu-west-1:047177058507:connection/50a61297-fb66-4ba7-a293-147ab69769d5"
}