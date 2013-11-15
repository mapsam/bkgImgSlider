Background Image Slider
=======================

*uses jQuery*

This is a quick script that allows for an image slider in a resizing div by changing the background images. With the background images set at background-size:cover the images will always fill the space without gaps.

Getting it rolling:

**1.** Link the slider script before the `</body>` tag of your HTML page.

```HTML
<script type="text/javascript" src="js/slider.js"></script>
```
**2.** Set up your image space with two `<div>` elements that are overlapping each other. The index.html file has this put together for you above.

**3.** Set your CSS for those two `<div>` elements so the background images are covering for all browsers (see the [CSS]() file). You may need to update the background positioning depending on your application (i.e. `top` vs. `bottom` vs. `center`).

**4.** In the `slider.js` file, you have to add two things; **image files names** and your URL **path to the images**. Replace the following with the image files you plan on using:

```Javascript
var images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
```
and replace the following URL path with your own:

```Javascript
url = 'localhost/your_path/images/';
```

See the <a href='http://www.mapsam.com/mugs/bkgimg-slider'>demo</a>.
