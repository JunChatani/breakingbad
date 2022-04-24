import { Stack, StackProps } from "aws-cdk-lib";
import {
  CodePipelineSource,
  CodePipeline,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { MyPipelineAppStage } from "./aws-pipeline-stage";

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "PetProjectPipelines", {
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.connection("JunChatani/breakingbad", "main", {
          connectionArn:
            "arn:aws:codestar-connections:eu-west-1:047177058507:connection/50a61297-fb66-4ba7-a293-147ab69769d5",
        }),
        commands: [
          "pwd",
          "cd ./api-implementation",
          "pwd",
          "npm ci",
          "npm run build",
          "pwd",
          "cd ./../",
          "cd ./aws",
          "pwd",
          "npm ci",
          "npm run build",
          "npx cdk synth",
        ],
        primaryOutputDirectory: "./aws/cdk.out",
      }),
    });

    pipeline.addStage(
      new MyPipelineAppStage(this, "testInPipeline", {
        env: { account: "047177058507", region: "eu-west-1" },
      })
    );
  }
}
