const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const copyFileAsync = promisify(fs.copyFile);
const readdirAsync = promisify(fs.readdir);
const mkdirAsync = promisify(fs.mkdir);

async function copyFiles(sourceDir, targetDir, extensions) {
  try {
    const files = await readdirAsync(sourceDir);
    await mkdirAsync(targetDir, { recursive: true });

    const filteredFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return extensions.includes(ext);
    });

    await Promise.all(
      filteredFiles.map(async file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        await copyFileAsync(sourcePath, targetPath);
        console.log(`Copied: ${file}`);
      })
    );

    console.log('Copy operation completed.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}


// Extract command-line arguments
const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];

// Define the file extensions to filter
const allowedExtensions = ['.txt', '.jpg'];

// Run the copyFiles function with the provided arguments
copyFiles(sourceDirectory, targetDirectory, allowedExtensions);
