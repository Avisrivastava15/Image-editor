# Image-editor

A web-based image editor built with HTML, CSS, and JavaScript that allows users to upload images, apply various filters, and download the edited images. The editor provides a smooth and interactive user experience with live updates while editing.

**Features**

Upload Image: Users can select an image from their device.

Live Filters: Adjust filters like brightness, contrast, saturation, hue, blur, grayscale, sepia, opacity, and invert in real-time.

Presets: Apply ready-made filter combinations like Vintage, Drama, and others.

Download Edited Image: Save the edited image to your device in PNG format.

Responsive Design: Works seamlessly on desktop and mobile devices.

Canvas-based Editing: Uses HTML <canvas> for precise image manipulation.

Custom Range Sliders: Stylish and interactive sliders for adjusting filter values.


**Usage**

Open index.html in your browser.

Steps to edit an image:

Click Choose Image to upload a file.

Use sliders under Filters to adjust image properties in real-time.

Apply any preset by clicking on it.

Once satisfied, click Download to save the edited image.

**Built With**

HTML5

CSS3

JavaScript (ES6)

HTML Canvas API

Remix Icons (for placeholder icons)

**Project Structure**
```/image-editor
│
├── index.html          # Main HTML file
├── style.css           # CSS for layout and styling
├── theme.css           # Color and theme variables
├── script.js           # JavaScript logic for filters, presets, and image handling
└── README.md           # Project documentation
```

**Customization**

Add new filters: Extend the filters object in script.js and create new range sliders dynamically.

Add new presets: Define new presets by combining different filter values in the presets array.



**Future Enhancements**

Crop and rotate images.

Add text and stickers to images.

Multi-image editing and history undo/redo.

Export in different formats (JPEG, WebP).

Author

Your Name – [GitHub Profile](https://github.com/Avisrivastava15)

[(Live URL)](https://image-editor321.netlify.app/)
