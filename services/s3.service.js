const S3 = require('aws-sdk/clients/s3');
const path = require('path');
const uuid = require('uuid').v4;

const { AWS_S3_BUCKET, AWS_S3_ACCESS_KEY, AWS_S3_REGION, AWS_S3_SECRET_KEY } = require('../constants/config')

const BucketConfig = new S3({
  region: AWS_S3_REGION,
  secretAccessKey: AWS_S3_SECRET_KEY,
  accessKeyId: AWS_S3_ACCESS_KEY
});

const uploadFile = async (file, itemType, itemId) => {
  const Key = _buildFilePath(file.name, itemType, itemId);

  return BucketConfig
    .upload({
      Bucket: AWS_S3_BUCKET,
      Key,
      ACL: "public-read",
      Body: file.data
    })
    .promise()
}

module.exports = {
  uploadFile
}


function _buildFilePath(fileName = '', itemType, itemId) {
  const ext1 = fileName.split('.').pop(); // jpg
  const ext2 = path.extname(fileName); // .jpg

  // return `${itemType}/${itemId}/${Date.now()}${ext2}`;
  return `${itemType}/${itemId}/${uuid()}.${ext1}`
}


// dec-2021.Node.S3.mp4
