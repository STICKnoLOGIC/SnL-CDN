# 🎨 Curated CSS & JavaScript CDN

A curated collection of **CSS and JavaScript** libraries, hosted on GitHub Pages and served via CDN.  
Perfect for developers who want reliable, lightweight, and easy-to-use frontend assets.  

🔗 CDN URL: [https://cdn.sticknologic.is-a.dev](https://wordpress-cdn.sticknologic.is-a.dev)

---

## 📦 Features
- ✅ Hand-picked CSS & JS assets  
- ✅ Served from **GitHub Pages CDN** (fast & free)  
- ✅ Easy to integrate with your HTML project
- ✅ Maintained by [STICKnoLOGIC](https://sticknologic.is-a.dev)  

---

# Infinite Running Text

A CSS file that help you to infinitely run yur text from left to right (same as what you see in news)

## 🚀 Usage

### 1. In Plain HTML
Just copy and paste in <Head>:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://wordpress-cdn.sticknologic.is-a.dev/running-text/styles.css">
```
### 2. Apply the classes
```html
<div class="snl-scroll-cntnr"> <!-- add this class to your container-->
    <div class=".snl-scroll"> <!-- default duration of 10 seconds scrolling from right to left (half of the total length) -->
        <p>another paragraph<p> 
        <p>another paragraph<p>
        <p>another paragraph<p>
        <p>another paragraph<p> <!-- double this until you achieve the infinite running text -->
            ...
        </div>
    <div class=".snl-scroll-20s"> <!-- duration will last 20 seconds of scrolling from right to left (half of the total length) -->
        <p>another paragraph<p> 
        <p>another paragraph<p>
        <p>another paragraph<p>
        <p>another paragraph<p> <!-- double this until you achieve the infinite running text -->
            ...
        </div>
<!-- the duration is incremented by 5 second and up to 35 second -->
 <!-- snl-scroll-5s, snl-scroll-10s(snl-scroll), snl-scroll-15s ... snl-scroll-35s  -->

<!-- we also have a infinite scroll from left to right -->
<div class=".snl-scroll-right"> <!-- default duration of 10 seconds scrolling from left to right (half of the total length) -->
        <p>another paragraph<p> 
        <p>another paragraph<p>
        <p>another paragraph<p>
        <p>another paragraph<p> <!-- double this until you achieve the infinite running text -->
            ...
        </div>

</div>
```

> Note: the speed depends on the length and duration
> The longer the total length, the fastest it scroll
> The shorter the duration, the faster it scroll

---

# Table of Contents

A CSS/JavaScript file that help you to Table of Content based on your Headings

## 🚀 Usage

### 1. In Plain HTML
Just copy and paste in <Head>:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://wordpress-cdn.sticknologic.is-a.dev/toc/styles.css">
<script src="https://wordpress-cdn.sticknologic.is-a.dev/toc/script.js"></script>
```

### 2. Applying
```html
<!-- inside of <Body>, create a div, you can customize it all you want -->
<div id="snl-toc"> <!-- Important to add the ID as this will use to locate the container of Table of Contents -->
<!-- You can add and customize title here (Rainbow color "Table of Content" )  -->
 The Contents:
 <!-- the heading will be auto generated -->
</div>
    <!-- your content -->
    <h1> Heading <h1>
    <h2> Heading <h2>
    <h3> Heading <h3>
    <h4> Heading <h4>
    <h5> Heading <h5>
    <h6> Heading <h6>
        
```

### Customization
Add and customize the following inside of your style

```css
/* the items */
.snl-toc-item {
  color: #000 !important;
}
.snl-toc-item:hover,.snl-toc-item:active {
  color: #ff9100 !important;
}

/* the active item */
.snl-toc-active {
  color: #ff7300 !important;
}

/* Indention for nested content */
.snl-toc-ind-0 {
  padding-left: 8px !important;
}
.snl-toc-ind-1 {
  padding-left: 16px !important;
}
.snl-toc-ind-2,.snl-toc-ind-3,.snl-toc-ind-4,.snl-toc-ind-5,.snl-toc-ind-6 {
  padding-left: 24px !important;
}
```


> Note: you also noted that most of the Customization class have "!important", it is to prevent the usage of the default style