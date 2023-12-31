const express = require('express');
const AWS = require('aws-sdk');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Set up AWS SDK with your credentials
AWS.config.update({
  region: 'US East (Ohio) us-east-2',
  ARN:"",
  S3URI:""
});

const s3 = new AWS.S3();
const bucketName = 'travelappratw';

// Express route to fetch photo URLs from S3
app.get('/travelappratwphotos', async (req, res) => {
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
module.exports = router;