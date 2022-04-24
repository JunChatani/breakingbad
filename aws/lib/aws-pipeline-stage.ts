import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { AwsStack } from "./aws-stack";

export class MyPipelineAppStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const lambdaStack = new AwsStack(this, "AwsStack");
  }
}
