const path = require('path');
const fs   = require('fs');
const util = require('util');
const matter = require('gray-matter');

const readFile = util.promisify(fs.readFile);
const readDir  = util.promisify(fs.readdir);

const listFiles = (directoryName) => {
  const directoryPath = path.join(__dirname, directoryName);
  return readDir(directoryPath)
}

const fileContent = (fileName) => {
  const filePath = path.join(__dirname, fileName);
  return readFile(filePath, 'utf8')
}

const parseBlogPost = async (fileName, BLOG_POST_PATH) => {
  const absoluteFilePath = path.join(__dirname, BLOG_POST_PATH + fileName);
  const content = await readFile(absoluteFilePath)
  let json = await matter(content) 
  json.fileName = fileName
  console.log(json)
  return json
}

const parseBlogPostList = async (fileNameArray, BLOG_POST_PATH) => {
  return await Promise.all(fileNameArray.map((fileName) => {
    var blogData = parseBlogPost(fileName,BLOG_POST_PATH);
    return blogData
  }))
}


module.exports = {
  listFiles: listFiles,
  fileContent: fileContent,
  parseBlogPost: parseBlogPost,
  parseBlogPostList: parseBlogPostList
}
