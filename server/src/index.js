/* eslint-disable import/no-unresolved */
const { S3Client, CreateBucketCommand } = require('@aws-sdk/client-s3');
const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});

// Set your AWS region
const region = 'your-region';

// Set your desired bucket name
const bucketName = 'your-bucket-name';

// Create an S3 client
const s3Client = new S3Client({ region });

// Create a function to create the bucket
async function createBucket() {
  const createBucketCommand = new CreateBucketCommand({ Bucket: bucketName });

  try {
    const response = await s3Client.send(createBucketCommand);
    console.log(`Bucket "${bucketName}" created successfully!`);
    console.log('Response:', response);
  } catch (err) {
    console.error('Error creating bucket:', err);
  }
}

// Call the function to create the bucket
// createBucket();
