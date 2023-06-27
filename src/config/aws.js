import { TranscribeClient } from "@aws-sdk/client-transcribe";

import { S3Client } from "@aws-sdk/client-s3"

import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const region = process.env.S3_REGION;

export const client = new S3Client({
    accessKeyId,
    secretAccessKey,
    region,
  });
  
  export const tclient = new TranscribeClient({
    accessKeyId,
    secretAccessKey,
    region,
  });