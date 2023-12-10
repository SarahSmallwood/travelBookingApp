const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Set up AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION',
});

const s3 = new AWS.S3();
const bucketName = 'YOUR_S3_BUCKET_NAME';

// Express route to fetch photo URLs from S3
app.get('/photos', async (req, res) => {
  try {
    const params = {
      Bucket: bucketName,
    };

    const data = await s3.listObjectsV2(params).promise();
    const photoUrls = data.Contents.map((item) => s3.getSignedUrl('getObject', { Bucket: bucketName, Key: item.Key }));

    res.json(photoUrls);
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
