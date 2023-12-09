const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up AWS SDK with your credentials
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION',
});

const s3 = new AWS.S3();

// Multer middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Express route for uploading a file to S3
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: file.originalname,
    Body: file.buffer,
  };

  s3.upload(params, (error, data) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error uploading file to S3');
    }

    console.log('File uploaded to S3:', data.Location);
    res.status(200).send('File uploaded successfully');
  });
});

// Express route for downloading a file from S3
app.get('/download/:key', (req, res) => {
  const key = req.params.key;

  const params = {
    Bucket: 'YOUR_S3_BUCKET_NAME',
    Key: key,
  };

  s3.getObject(params, (error, data) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error downloading file from S3');
    }

    res.setHeader('Content-Type', data.ContentType);
    res.send(data.Body);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
