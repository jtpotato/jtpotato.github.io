const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputFolder = 'public/images';
const outputFolder = 'public/optimised';

// Ensure the output folder exists, create if not
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, { recursive: true });
}

// Recursively get a list of all image files in the input folder
function getFiles(dir) {
    const files = fs.readdirSync(dir);
    let fileList = [];

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            fileList = fileList.concat(getFiles(filePath));
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

const imageFiles = getFiles(inputFolder);

if (imageFiles.length === 0) {
    console.log('No image files found in the input folder.');
} else {
    // Process each image file
    imageFiles.forEach(imagePath => {
        const relativePath = path.relative(inputFolder, imagePath);
        const outputFileName = path.join(outputFolder, relativePath).replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const outputDir = path.dirname(outputFileName);

        // Ensure the output directory exists, create if not
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Read and optimize the image using sharp
        sharp(imagePath)
            .webp({ quality: 80 }) // Set the quality as needed
            .toFile(outputFileName, (err, info) => {
                if (err) {
                    console.error(`Error processing ${imagePath}:`, err);
                } else {
                    console.log(`Optimized ${imagePath} and saved as ${path.relative(outputFolder, outputFileName)}`);
                }
            });
    });
}
