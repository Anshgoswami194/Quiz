export const questionSets = {
  
  html: [
    {
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", correct: true },
        { text: "Hyperlinks and Text Markup Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
        { text: "Hyper Text Makeup Language", correct: false }
      ],
      explanation: "HTML stands for Hyper Text Markup Language. It's the standard markup language for creating web pages and web applications, defining the structure and content of a webpage."
    },
    {
      question: "Which tag is used to define a hyperlink?",
      answers: [
        { text: "<link>", correct: false },
        { text: "<a>", correct: true },
        { text: "<href>", correct: false },
        { text: "<hyperlink>", correct: false }
      ],
      explanation: "The <a> tag defines a hyperlink, which is used to link from one page to another. The href attribute specifies the link's destination: <a href='url'>link text</a>."
    },
    {
      question: "Which tag is used to define an unordered list?",
      answers: [
        { text: "<ol>", correct: false },
        { text: "<ul>", correct: true },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false }
      ],
      explanation: "The <ul> tag defines an unordered (bulleted) list. Each item in the list is defined with an <li> tag. Ordered lists use <ol> instead."
    },
    {
      question: "Which attribute is used to specify an alternate text for an image?",
      answers: [
        { text: "title", correct: false },
        { text: "src", correct: false },
        { text: "alt", correct: true },
        { text: "href", correct: false }
      ],
      explanation: "The alt attribute provides alternative text for an image if it cannot be displayed. It's important for accessibility and SEO: <img src='image.jpg' alt='description'>."
    },
    {
      question: "Which tag is used to define a table row?",
      answers: [
        { text: "<tr>", correct: true },
        { text: "<td>", correct: false },
        { text: "<th>", correct: false },
        { text: "<table>", correct: false }
      ],
      explanation: "The <tr> tag defines a row in an HTML table. It contains one or more <th> (header cell) or <td> (standard cell) elements."
    },
    {
      question: "Which tag is used to define a paragraph?",
      answers: [
        { text: "<p>", correct: true },
        { text: "<para>", correct: false },
        { text: "<paragraph>", correct: false },
        { text: "<div>", correct: false }
      ],
      explanation: "The <p> tag defines a paragraph. Browsers automatically add some margin before and after each <p> element to separate paragraphs."
    },
    {
      question: "Which tag is used to define the header of a document?",
      answers: [
        { text: "<head>", correct: true },
        { text: "<header>", correct: false },
        { text: "<h1>", correct: false },
        { text: "<title>", correct: false }
      ],
      explanation: "The <head> element contains meta-information about the document, including its title, links to scripts and style sheets. It's not displayed on the webpage itself."
    },
    {
      question: "Which tag is used to define a line break?",
      answers: [
        { text: "<lb>", correct: false },
        { text: "<break>", correct: false },
        { text: "<br>", correct: true },
        { text: "<newline>", correct: false }
      ],
      explanation: "The <br> tag inserts a single line break. It's an empty tag (no closing tag needed) and is useful for addresses, poems, or where line breaks are significant."
    },
    {
      question: "Which tag is used to define a comment in HTML?",
      answers: [
        { text: "<!-- -->", correct: true },
        { text: "<comment>", correct: false },
        { text: "<!comment>", correct: false },
        { text: "<*>", correct: false }
      ],
      explanation: "HTML comments are written between <!-- and -->. They are not displayed in the browser but can help document your HTML source code."
    },
    {
      question: "Which tag is used to define a form?",
      answers: [
        { text: "<input>", correct: false },
        { text: "<form>", correct: true },
        { text: "<submit>", correct: false },
        { text: "<button>", correct: false }
      ],
      explanation: "The <form> tag is used to create an HTML form for user input. It can contain various input elements like text fields, checkboxes, radio buttons, etc."
    },
    {
      question: "Which attribute is used to specify that an input field must be filled out?",
      answers: [
        { text: "required", correct: true },
        { text: "validate", correct: false },
        { text: "mandatory", correct: false },
        { text: "mustfill", correct: false }
      ],
      explanation: "The required attribute is a boolean attribute that specifies the input field must be filled out before submitting the form: <input type='text' required>."
    },
    {
      question: "Which tag is used to define a drop-down list?",
      answers: [
        { text: "<list>", correct: false },
        { text: "<dropdown>", correct: false },
        { text: "<select>", correct: true },
        { text: "<option>", correct: false }
      ],
      explanation: "The <select> element creates a drop-down list. Each option in the list is defined with an <option> tag inside the <select> element."
    },
    {
      question: "Which tag is used to define a division or section in a document?",
      answers: [
        { text: "<section>", correct: false },
        { text: "<div>", correct: true },
        { text: "<span>", correct: false },
        { text: "<block>", correct: false }
      ],
      explanation: "The <div> tag defines a division or section in an HTML document. It's used as a container for other HTML elements and is often styled with CSS."
    },
    {
      question: "Which tag is used to define an image?",
      answers: [
        { text: "<img>", correct: true },
        { text: "<image>", correct: false },
        { text: "<picture>", correct: false },
        { text: "<src>", correct: false }
      ],
      explanation: "The <img> tag is used to embed an image in an HTML page. It requires the src attribute which specifies the path to the image: <img src='image.jpg'>."
    },
    {
      question: "Which tag is used to define a table header cell?",
      answers: [
        { text: "<td>", correct: false },
        { text: "<th>", correct: true },
        { text: "<header>", correct: false },
        { text: "<thead>", correct: false }
      ],
      explanation: "The <th> tag defines a header cell in an HTML table. Text in <th> elements are bold and centered by default, unlike regular <td> cells."
    },
    {
      question: "Which tag is used to define a list item?",
      answers: [
        { text: "<item>", correct: false },
        { text: "<li>", correct: true },
        { text: "<list>", correct: false },
        { text: "<dl>", correct: false }
      ],
      explanation: "The <li> tag defines a list item, used inside ordered lists (<ol>), unordered lists (<ul>), and menu lists (<menu>)."
    },
    {
      question: "Which tag is used to define a horizontal rule?",
      answers: [
        { text: "<hr>", correct: true },
        { text: "<line>", correct: false },
        { text: "<rule>", correct: false },
        { text: "<hl>", correct: false }
      ],
      explanation: "The <hr> tag defines a thematic break or horizontal rule in an HTML page, often displayed as a horizontal line to separate content."
    },
    {
      question: "Which tag is used to define a button?",
      answers: [
        { text: "<btn>", correct: false },
        { text: "<button>", correct: true },
        { text: "<input type='button'>", correct: false },
        { text: "<submit>", correct: false }
      ],
      explanation: "The <button> tag defines a clickable button. Inside a button element you can put text (and tags like <i>, <b>, <strong>, etc.), unlike buttons created with <input>."
    },
    {
      question: "Which tag is used to define a title for the document?",
      answers: [
        { text: "<head>", correct: false },
        { text: "<title>", correct: true },
        { text: "<header>", correct: false },
        { text: "<h1>", correct: false }
      ],
      explanation: "The <title> tag defines the title of the document, shown in the browser's title bar or tab. It must be text-only and is placed within the <head> element."
    },
    {
      question: "Which tag is used to define a meta tag?",
      answers: [
        { text: "<meta>", correct: true },
        { text: "<metadata>", correct: false },
        { text: "<info>", correct: false },
        { text: "<head>", correct: false }
      ],
      explanation: "The <meta> tag provides metadata about the HTML document, such as character encoding, viewport settings, or page description. It always goes inside the <head> element."
    },
    {
      question: "Which tag is used to define a style for a document?",
      answers: [
        { text: "<css>", correct: false },
        { text: "<style>", correct: true },
        { text: "<stylesheet>", correct: false },
        { text: "<design>", correct: false }
      ],
      explanation: "The <style> tag is used to define CSS style information for an HTML document. It typically contains CSS rules and is placed in the <head> section."
    },
    {
      question: "Which tag is used to define a script?",
      answers: [
        { text: "<javascript>", correct: false },
        { text: "<script>", correct: true },
        { text: "<js>", correct: false },
        { text: "<code>", correct: false }
      ],
      explanation: "The <script> tag is used to embed or reference JavaScript code. It can contain scripting statements or link to an external script file via the src attribute."
    },
    {
      question: "Which tag is used to define a link to an external resource?",
      answers: [
        { text: "<a>", correct: false },
        { text: "<link>", correct: true },
        { text: "<href>", correct: false },
        { text: "<resource>", correct: false }
      ],
      explanation: "The <link> tag defines the relationship between the current document and an external resource, most commonly used to link to stylesheets: <link rel='stylesheet' href='styles.css'>."
    },
    {
      question: "Which tag is used to define a footer for a document?",
      answers: [
        { text: "<bottom>", correct: false },
        { text: "<footer>", correct: true },
        { text: "<foot>", correct: false },
        { text: "<end>", correct: false }
      ],
      explanation: "The <footer> tag defines a footer for a document or section. It typically contains authorship information, copyright data, or links to related documents."
    },
    {
      question: "Which tag is used to define a navigation section?",
      answers: [
        { text: "<nav>", correct: true },
        { text: "<navigation>", correct: false },
        { text: "<menu>", correct: false },
        { text: "<links>", correct: false }
      ],
      explanation: "The <nav> tag defines a set of navigation links. Not all links need to be in a <nav> element - it's intended for major blocks of navigation links."
    },
    {
      question: "Which tag is used to define a section in a document?",
      answers: [
        { text: "<div>", correct: false },
        { text: "<section>", correct: true },
        { text: "<part>", correct: false },
        { text: "<block>", correct: false }
      ],
      explanation: "The <section> tag defines sections in a document, such as chapters, headers, footers, or any other sections. It represents a thematic grouping of content."
    },
    {
      question: "Which tag is used to define an article in a document?",
      answers: [
        { text: "<article>", correct: true },
        { text: "<post>", correct: false },
        { text: "<content>", correct: false },
        { text: "<text>", correct: false }
      ],
      explanation: "The <article> tag specifies independent, self-contained content that could be distributed separately, like a blog post, news story, or forum post."
    },
    {
      question: "Which tag is used to define a header for a section?",
      answers: [
        { text: "<head>", correct: false },
        { text: "<header>", correct: true },
        { text: "<h1>", correct: false },
        { text: "<title>", correct: false }
      ],
      explanation: "The <header> element represents introductory content, typically a group of introductory or navigational aids. It may contain heading elements, logos, search forms, etc."
    },
    {
      question: "Which tag is used to define a time or date?",
      answers: [
        { text: "<date>", correct: false },
        { text: "<time>", correct: true },
        { text: "<datetime>", correct: false },
        { text: "<calendar>", correct: false }
      ],
      explanation: "The <time> tag defines a human-readable date/time. It can include the datetime attribute to represent dates in a machine-readable format for better search results or custom features."
    }
  ],
  css: [
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Computer Style Sheets", correct: false },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false }
      ],
      explanation: "CSS stands for Cascading Style Sheets. It's a stylesheet language used to describe the presentation of a document written in HTML, controlling layout, colors, fonts, and other visual aspects."
    },
    {
      question: "Which property is used to change the background color?",
      answers: [
        { text: "color", correct: false },
        { text: "bgcolor", correct: false },
        { text: "background-color", correct: true },
        { text: "background", correct: false }
      ],
      explanation: "The background-color property sets the background color of an element. It accepts color values like named colors (red), HEX (#ff0000), RGB (rgb(255,0,0)), or HSL (hsl(0,100%,50%))."
    },
    {
      question: "Which property is used to change the text color?",
      answers: [
        { text: "text-color", correct: false },
        { text: "color", correct: true },
        { text: "font-color", correct: false },
        { text: "fgcolor", correct: false }
      ],
      explanation: "The color property sets the color of text content and text decorations. It affects the foreground color of an element's text and accepts the same color values as background-color."
    },
    {
      question: "Which property is used to change the font of an element?",
      answers: [
        { text: "font-family", correct: true },
        { text: "font-style", correct: false },
        { text: "font-weight", correct: false },
        { text: "font", correct: false }
      ],
      explanation: "The font-family property specifies the font for an element. You can specify multiple fonts as fallbacks (e.g., font-family: Arial, Helvetica, sans-serif) in case the first choice isn't available."
    },
    {
      question: "Which property is used to change the size of the text?",
      answers: [
        { text: "text-size", correct: false },
        { text: "font-size", correct: true },
        { text: "text-style", correct: false },
        { text: "size", correct: false }
      ],
      explanation: "The font-size property sets the size of the font. It can be specified in pixels (px), ems (em), rems (rem), percentages (%), or absolute keywords (small, medium, large)."
    },
    {
      question: "Which property is used to add space between the border and content?",
      answers: [
        { text: "margin", correct: false },
        { text: "padding", correct: true },
        { text: "spacing", correct: false },
        { text: "border-spacing", correct: false }
      ],
      explanation: "Padding is the space between an element's content and its border. It's controlled by the padding property, which can be set for all sides (padding: 10px) or individual sides (padding-top: 5px)."
    },
    {
      question: "Which property is used to add space outside the border?",
      answers: [
        { text: "margin", correct: true },
        { text: "padding", correct: false },
        { text: "spacing", correct: false },
        { text: "border-spacing", correct: false }
      ],
      explanation: "Margin is the space outside an element's border, creating separation between elements. The margin property can be set for all sides (margin: 20px) or individual sides (margin-left: 15px)."
    },
    {
      question: "Which property is used to make text bold?",
      answers: [
        { text: "font-weight", correct: true },
        { text: "font-style", correct: false },
        { text: "text-weight", correct: false },
        { text: "bold", correct: false }
      ],
      explanation: "The font-weight property sets the weight (boldness) of the font. Common values are normal (400) and bold (700), but numeric values from 100 to 900 are also possible with variable fonts."
    },
    {
      question: "Which property is used to make text italic?",
      answers: [
        { text: "font-weight", correct: false },
        { text: "font-style", correct: true },
        { text: "text-style", correct: false },
        { text: "italic", correct: false }
      ],
      explanation: "The font-style property is used to make text italic. Its values include normal, italic (true italic version if available), and oblique (simulated slant if italic isn't available)."
    },
    {
      question: "Which property is used to underline text?",
      answers: [
        { text: "text-decoration", correct: true },
        { text: "text-style", correct: false },
        { text: "underline", correct: false },
        { text: "font-decoration", correct: false }
      ],
      explanation: "The text-decoration property is used to add decorations like underline, overline, line-through, or none. It can be combined: text-decoration: underline wavy red;"
    },
    {
      question: "Which property is used to align text?",
      answers: [
        { text: "text-align", correct: true },
        { text: "align", correct: false },
        { text: "text-position", correct: false },
        { text: "justify", correct: false }
      ],
      explanation: "The text-align property sets the horizontal alignment of text within its container. Values include left, right, center, and justify (which spreads text to fill the line)."
    },
    {
      question: "Which property is used to add a border to an element?",
      answers: [
        { text: "border-style", correct: false },
        { text: "border", correct: true },
        { text: "border-width", correct: false },
        { text: "border-color", correct: false }
      ],
      explanation: "The border shorthand property sets all border properties in one declaration: border: 1px solid black; combines border-width, border-style, and border-color."
    },
    {
      question: "Which property is used to change the display type of an element?",
      answers: [
        { text: "display", correct: true },
        { text: "type", correct: false },
        { text: "visibility", correct: false },
        { text: "show", correct: false }
      ],
      explanation: "The display property specifies an element's display behavior. Common values include block, inline, inline-block, flex, grid, and none (which hides the element)."
    },
    {
      question: "Which property is used to position an element?",
      answers: [
        { text: "position", correct: true },
        { text: "align", correct: false },
        { text: "float", correct: false },
        { text: "display", correct: false }
      ],
      explanation: "The position property specifies how an element is positioned. Values include static (default), relative, absolute, fixed, and sticky, each affecting layout behavior differently."
    },
    {
      question: "Which property is used to create rounded corners?",
      answers: [
        { text: "border-radius", correct: true },
        { text: "corner-radius", correct: false },
        { text: "round-corner", correct: false },
        { text: "border-round", correct: false }
      ],
      explanation: "The border-radius property rounds the corners of an element's outer border edge. You can specify one value for all corners or different values for each corner."
    },
    {
      question: "Which property is used to create a shadow effect?",
      answers: [
        { text: "shadow", correct: false },
        { text: "box-shadow", correct: true },
        { text: "text-shadow", correct: false },
        { text: "effect-shadow", correct: false }
      ],
      explanation: "The box-shadow property adds shadow effects around an element's frame. Syntax: box-shadow: h-offset v-offset blur spread color inset; Multiple shadows can be comma-separated."
    },
    {
      question: "Which property is used to change the opacity of an element?",
      answers: [
        { text: "opacity", correct: true },
        { text: "transparency", correct: false },
        { text: "alpha", correct: false },
        { text: "visibility", correct: false }
      ],
      explanation: "The opacity property sets the transparency of an element, where 1 is fully opaque and 0 is fully transparent. It affects the entire element including its contents."
    },
    {
      question: "Which property is used to create a transition effect?",
      answers: [
        { text: "transition", correct: true },
        { text: "animation", correct: false },
        { text: "effect", correct: false },
        { text: "transform", correct: false }
      ],
      explanation: "The transition property enables smooth transitions between different states of an element. It specifies which properties to animate, duration, timing function, and delay."
    },
    {
      question: "Which property is used to rotate an element?",
      answers: [
        { text: "rotate", correct: false },
        { text: "transform", correct: true },
        { text: "rotation", correct: false },
        { text: "spin", correct: false }
      ],
      explanation: "The transform property applies 2D or 3D transformations including rotation (rotate(45deg)), scaling, skewing, and translating. Multiple transforms can be space-separated."
    },
    {
      question: "Which property is used to create a flexbox layout?",
      answers: [
        { text: "flex", correct: false },
        { text: "flexbox", correct: false },
        { text: "display: flex", correct: true },
        { text: "layout: flex", correct: false }
      ],
      explanation: "Setting display: flex on a container creates a flex context for its direct children. Flexbox provides efficient ways to align and distribute space among items in a container."
    },
    {
      question: "Which property is used to create a grid layout?",
      answers: [
        { text: "grid", correct: false },
        { text: "gridbox", correct: false },
        { text: "display: grid", correct: true },
        { text: "layout: grid", correct: false }
      ],
      explanation: "display: grid creates a grid container, enabling two-dimensional layouts with rows and columns. Child elements become grid items placed in the defined grid structure."
    },
    {
      question: "Which property is used to create a gradient background?",
      answers: [
        { text: "gradient", correct: false },
        { text: "background-gradient", correct: false },
        { text: "background-image", correct: true },
        { text: "gradient-background", correct: false }
      ],
      explanation: "The background-image property can create linear or radial gradients using the linear-gradient() or radial-gradient() functions, which generate gradient images."
    },
    {
      question: "Which property is used to change the cursor type?",
      answers: [
        { text: "cursor", correct: true },
        { text: "pointer", correct: false },
        { text: "mouse", correct: false },
        { text: "hover", correct: false }
      ],
      explanation: "The cursor property specifies the mouse cursor to display when pointing at an element. Values include pointer (hand), wait (hourglass), text (I-beam), and many more."
    },
    {
      question: "Which property is used to create a hover effect?",
      answers: [
        { text: "hover", correct: false },
        { text: "active", correct: false },
        { text: ":hover", correct: true },
        { text: "mouseover", correct: false }
      ],
      explanation: "The :hover pseudo-class (not a property) applies styles when the user hovers over an element with a pointing device. It's commonly used for interactive elements like buttons and links."
    },
    {
      question: "Which property is used to create a responsive design?",
      answers: [
        { text: "responsive", correct: false },
        { text: "@media", correct: true },
        { text: "viewport", correct: false },
        { text: "flexible", correct: false }
      ],
      explanation: "@media rules (media queries) allow you to apply CSS only when certain conditions are met, enabling responsive designs that adapt to different screen sizes and devices."
    },
    {
      question: "Which property is used to create a fixed background image?",
      answers: [
        { text: "background-fixed", correct: false },
        { text: "background-attachment", correct: true },
        { text: "background-position", correct: false },
        { text: "background-style", correct: false }
      ],
      explanation: "background-attachment: fixed makes the background image stay in the same position relative to the viewport, even when scrolling. Other values include scroll (default) and local."
    },
    {
      question: "Which property is used to create a sticky element?",
      answers: [
        { text: "position: sticky", correct: true },
        { text: "position: fixed", correct: false },
        { text: "position: relative", correct: false },
        { text: "position: absolute", correct: false }
      ],
      explanation: "position: sticky makes an element behave like relative until it crosses a specified threshold (via top, right, bottom, or left), then it sticks in place like fixed."
    },
    {
      question: "Which property is used to create a z-index?",
      answers: [
        { text: "z-index", correct: true },
        { text: "layer", correct: false },
        { text: "depth", correct: false },
        { text: "stack", correct: false }
      ],
      explanation: "The z-index property controls the stacking order of positioned elements (those with position other than static). Higher values appear in front of lower values."
    },
    {
      question: "Which property is used to create a text shadow?",
      answers: [
        { text: "text-shadow", correct: true },
        { text: "shadow", correct: false },
        { text: "text-effect", correct: false },
        { text: "font-shadow", correct: false }
      ],
      explanation: "text-shadow adds shadows to text. Syntax: text-shadow: h-offset v-offset blur-radius color; Multiple shadows can be comma-separated for layered effects."
    },
    {
      question: "Which property is used to create a column layout?",
      answers: [
        { text: "columns", correct: true },
        { text: "column-count", correct: false },
        { text: "column-layout", correct: false },
        { text: "multi-column", correct: false }
      ],
      explanation: "The columns shorthand property sets both column-width and column-count, creating a multi-column layout where content flows from one column to the next."
    }
  ],
  js: [
    {
      question: "What is 'typeof NaN' in JavaScript?",
      answers: [
        { text: "Number", correct: true },
        { text: "NaN", correct: false },
        { text: "Undefined", correct: false },
        { text: "Object", correct: false }
      ],
      explanation: "Despite its name 'Not-a-Number', NaN is technically of type 'number' in JavaScript. This is because it's part of the numeric type system in IEEE 754 floating-point specification."
    },
    {
      question: "Which method removes the last element from an array?",
      answers: [
        { text: "pop()", correct: true },
        { text: "shift()", correct: false },
        { text: "slice()", correct: false },
        { text: "splice()", correct: false }
      ],
      explanation: "The pop() method removes the last element from an array and returns that element, changing the array's length. shift() removes from the beginning, slice() returns a copy of a portion, and splice() can add/remove elements at any index."
    },
    {
      question: "What does the '===' operator check?",
      answers: [
        { text: "Value only", correct: false },
        { text: "Value and type", correct: true },
        { text: "Type only", correct: false },
        { text: "Neither value nor type", correct: false }
      ],
      explanation: "The strict equality operator (===) checks both value and type without performing type coercion. For example, 0 === '0' is false because one is a number and the other is a string."
    },
    {
      question: "How do you declare a constant in JavaScript?",
      answers: [
        { text: "let", correct: false },
        { text: "var", correct: false },
        { text: "const", correct: true },
        { text: "constant", correct: false }
      ],
      explanation: "The const keyword declares a block-scoped constant that can't be reassigned. Unlike var, const declarations must be initialized, and they don't get hoisted."
    },
    {
      question: "What is the output of: console.log(1 + '1')?",
      answers: [
        { text: "2", correct: false },
        { text: "11", correct: true },
        { text: "NaN", correct: false },
        { text: "Error", correct: false }
      ],
      explanation: "JavaScript performs type coercion when using + with different types. Here, the number 1 is converted to a string, resulting in string concatenation ('1' + '1' = '11')."
    },
    {
      question: "Which is NOT a JavaScript framework?",
      answers: [
        { text: "React", correct: false },
        { text: "Angular", correct: false },
        { text: "Django", correct: true },
        { text: "Vue", correct: false }
      ],
      explanation: "Django is a Python web framework, not a JavaScript framework. React, Angular, and Vue are all popular JavaScript frameworks for building user interfaces."
    },
    {
      question: "What does the 'this' keyword refer to?",
      answers: [
        { text: "The function itself", correct: false },
        { text: "The global object", correct: false },
        { text: "The object that owns the executing code", correct: true },
        { text: "The parent object", correct: false }
      ],
      explanation: "The value of 'this' depends on how a function is called. In most cases, it refers to the object that owns the currently executing code, but it can change based on context (global, object method, constructor, etc.)."
    },
    {
      question: "What is a closure in JavaScript?",
      answers: [
        { text: "A function that has access to its outer function's scope", correct: true },
        { text: "A way to close a program", correct: false },
        { text: "A method to hide variables", correct: false },
        { text: "A type of loop", correct: false }
      ],
      explanation: "A closure is a function that remembers its outer variables and can access them even after the outer function has finished executing. This is a fundamental concept in JavaScript's scoping system."
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      answers: [
        { text: "JSON.parse()", correct: true },
        { text: "JSON.stringify()", correct: false },
        { text: "JSON.convert()", correct: false },
        { text: "JSON.toObject()", correct: false }
      ],
      explanation: "JSON.parse() takes a JSON string and transforms it into a JavaScript object. JSON.stringify() does the opposite - converts a JavaScript object to a JSON string."
    },
    {
      question: "What is the purpose of 'use strict'?",
      answers: [
        { text: "To enforce stricter type checking", correct: false },
        { text: "To make JavaScript run faster", correct: false },
        { text: "To enforce stricter parsing and error handling", correct: true },
        { text: "To enable experimental features", correct: false }
      ],
      explanation: "'use strict' enables strict mode which catches common coding mistakes and prevents the use of potentially problematic features. It makes debugging easier by turning silent errors into throw errors."
    },
    {
      question: "Which is NOT a JavaScript data type?",
      answers: [
        { text: "Boolean", correct: false },
        { text: "Number", correct: false },
        { text: "Character", correct: true },
        { text: "Symbol", correct: false }
      ],
      explanation: "JavaScript doesn't have a separate 'character' type - it uses strings for characters. The primitive types are: Undefined, Null, Boolean, Number, String, BigInt, and Symbol."
    },
    {
      question: "What does the 'async' keyword do?",
      answers: [
        { text: "Makes a function synchronous", correct: false },
        { text: "Indicates a function returns a promise", correct: true },
        { text: "Pauses execution until complete", correct: false },
        { text: "Creates a new thread", correct: false }
      ],
      explanation: "An async function always returns a promise. If the function returns a value, the promise will be resolved with that value. If it throws an exception, the promise will be rejected."
    },
    {
      question: "Which method creates a new array with all elements that pass a test?",
      answers: [
        { text: "map()", correct: false },
        { text: "filter()", correct: true },
        { text: "reduce()", correct: false },
        { text: "forEach()", correct: false }
      ],
      explanation: "filter() creates a new array with all elements that pass the test implemented by the provided function. map() transforms elements, reduce() accumulates values, and forEach() just iterates."
    },
    {
      question: "What is the purpose of the 'finally' block in try/catch?",
      answers: [
        { text: "To handle errors", correct: false },
        { text: "To run code regardless of the outcome", correct: true },
        { text: "To skip the catch block", correct: false },
        { text: "To terminate execution", correct: false }
      ],
      explanation: "The finally block executes after the try and catch blocks, regardless of whether an exception was thrown or caught. It's useful for cleanup code that needs to run no matter what."
    },
    {
      question: "Which operator is used for exponentiation?",
      answers: [
        { text: "^", correct: false },
        { text: "**", correct: true },
        { text: "^^", correct: false },
        { text: "exp()", correct: false }
      ],
      explanation: "The exponentiation operator (**) raises the first operand to the power of the second operand. It was introduced in ES2016 as a more concise alternative to Math.pow()."
    },
    {
      question: "What is the output of: console.log(typeof [])?",
      answers: [
        { text: "array", correct: false },
        { text: "object", correct: true },
        { text: "list", correct: false },
        { text: "undefined", correct: false }
      ],
      explanation: "Arrays are technically objects in JavaScript. The typeof operator returns 'object' for all objects, including arrays. To check specifically for arrays, use Array.isArray()."
    },
    {
      question: "Which method adds one or more elements to the beginning of an array?",
      answers: [
        { text: "push()", correct: false },
        { text: "unshift()", correct: true },
        { text: "concat()", correct: false },
        { text: "prepend()", correct: false }
      ],
      explanation: "unshift() adds elements to the beginning of an array and returns the new length. push() adds to the end, concat() merges arrays, and prepend() isn't a standard array method."
    },
    {
      question: "What is the purpose of the 'bind()' method?",
      answers: [
        { text: "To create a new function with a specific 'this' value", correct: true },
        { text: "To bind events to elements", correct: false },
        { text: "To combine two functions", correct: false },
        { text: "To prevent a function from being called", correct: false }
      ],
      explanation: "bind() creates a new function that, when called, has its 'this' keyword set to the provided value. It's useful for setting context when passing methods as callbacks."
    },
    {
      question: "Which symbol is used for template literals?",
      answers: [
        { text: "Single quotes ('')", correct: false },
        { text: "Double quotes (\")", correct: false },
        { text: "Backticks (``)", correct: true },
        { text: "Curly braces ({})", correct: false }
      ],
      explanation: "Template literals use backticks (``) and allow for multi-line strings, string interpolation with ${}, and tagged templates. They were introduced in ES6 as a more powerful string literal syntax."
    },
    {
      question: "What does the 'Promise' object represent?",
      answers: [
        { text: "A value that might be available now, or in the future", correct: true },
        { text: "A guaranteed return value", correct: false },
        { text: "A synchronous operation", correct: false },
        { text: "An error handler", correct: false }
      ],
      explanation: "A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states: pending, fulfilled, or rejected."
    },
    {
      question: "Which method is used to copy properties from one object to another?",
      answers: [
        { text: "Object.assign()", correct: true },
        { text: "Object.copy()", correct: false },
        { text: "Object.merge()", correct: false },
        { text: "Object.clone()", correct: false }
      ],
      explanation: "Object.assign() copies all enumerable own properties from one or more source objects to a target object. It performs a shallow copy and returns the modified target object."
    },
    {
      question: "What is the purpose of the 'Symbol' data type?",
      answers: [
        { text: "To create unique identifiers", correct: true },
        { text: "To represent currency values", correct: false },
        { text: "To store binary data", correct: false },
        { text: "To create special characters", correct: false }
      ],
      explanation: "Symbols are unique and immutable primitive values that can be used as object property keys. They help prevent naming collisions and enable private-like properties (though not truly private)."
    },
    {
      question: "Which method converts an object to a JSON string?",
      answers: [
        { text: "JSON.parse()", correct: false },
        { text: "JSON.stringify()", correct: true },
        { text: "JSON.encode()", correct: false },
        { text: "JSON.toText()", correct: false }
      ],
      explanation: "JSON.stringify() converts a JavaScript object or value to a JSON string. It can optionally include a replacer function or array to filter properties, and a space parameter for pretty-printing."
    },
    {
      question: "What is the output of: console.log(0.1 + 0.2 === 0.3)?",
      answers: [
        { text: "true", correct: false },
        { text: "false", correct: true },
        { text: "undefined", correct: false },
        { text: "NaN", correct: false }
      ],
      explanation: "Due to floating-point precision issues in JavaScript (and most programming languages), 0.1 + 0.2 actually equals approximately 0.30000000000000004, not exactly 0.3."
    },
    {
      question: "Which is NOT a way to declare a variable?",
      answers: [
        { text: "let", correct: false },
        { text: "const", correct: false },
        { text: "var", correct: false },
        { text: "def", correct: true }
      ],
      explanation: "JavaScript uses let, const, and var for variable declarations. 'def' is not a JavaScript keyword - it's used in Python for function definitions."
    },
    {
      question: "What is the purpose of the 'spread' operator (...) in JavaScript?",
      answers: [
        { text: "To expand iterables into individual elements", correct: true },
        { text: "To perform mathematical operations", correct: false },
        { text: "To concatenate strings", correct: false },
        { text: "To create new objects", correct: false }
      ],
      explanation: "The spread operator (...) allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected. It's commonly used for array/object copying, merging, and function arguments."
    },
    {
      question: "Which method returns the first element that matches a CSS selector?",
      answers: [
        { text: "document.querySelector()", correct: true },
        { text: "document.getElementById()", correct: false },
        { text: "document.getElementsByClassName()", correct: false },
        { text: "document.find()", correct: false }
      ],
      explanation: "querySelector() returns the first Element within the document that matches the specified selector. getElementById() only matches IDs, getElementsByClassName() matches classes and returns a collection, and find() isn't a standard DOM method."
    },
    {
      question: "What is the purpose of the 'localStorage' object?",
      answers: [
        { text: "To store data on the server", correct: false },
        { text: "To store data with no expiration date", correct: true },
        { text: "To store session-only data", correct: false },
        { text: "To store cookies", correct: false }
      ],
      explanation: "localStorage allows you to store key/value pairs in the browser with no expiration time. Data persists even when the browser is closed. sessionStorage is similar but only lasts for the session."
    },
    {
      question: "Which method creates a new array with the results of calling a function on every element?",
      answers: [
        { text: "filter()", correct: false },
        { text: "reduce()", correct: false },
        { text: "map()", correct: true },
        { text: "forEach()", correct: false }
      ],
      explanation: "map() creates a new array populated with the results of calling a provided function on every element in the calling array. It doesn't mutate the original array."
    },
    {
      question: "What is the output of: console.log([] == ![])?",
      answers: [
        { text: "true", correct: true },
        { text: "false", correct: false },
        { text: "undefined", correct: false },
        { text: "Error", correct: false }
      ],
      explanation: "This is a confusing result of JavaScript's type coercion. ![] evaluates to false (since arrays are truthy). Then [] == false goes through several coercion steps that ultimately result in true."
    }
  ],
  java: [
    {
      question: "Which keyword is used to inherit a class in Java?",
      answers: [
        { text: "inherits", correct: false },
        { text: "extends", correct: true },
        { text: "implement", correct: false },
        { text: "instanceof", correct: false }
      ],
      explanation: "In Java, the 'extends' keyword is used to create a subclass that inherits from a superclass. The 'implements' keyword is used for interfaces. 'inherits' is not a valid Java keyword."
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      answers: [
        { text: "true", correct: false },
        { text: "false", correct: true },
        { text: "null", correct: false },
        { text: "0", correct: false }
      ],
      explanation: "In Java, primitive boolean variables default to 'false' if not explicitly initialized. This differs from Boolean wrapper objects which default to null."
    },
    {
      question: "Which method must be implemented by all threads in Java?",
      answers: [
        { text: "start()", correct: false },
        { text: "run()", correct: true },
        { text: "execute()", correct: false },
        { text: "main()", correct: false }
      ],
      explanation: "The run() method contains the code that executes when the thread starts. While start() begins thread execution, run() is the method that must be implemented."
    },
    {
      question: "What is the size of 'int' in Java?",
      answers: [
        { text: "16 bits", correct: false },
        { text: "32 bits", correct: true },
        { text: "64 bits", correct: false },
        { text: "Depends on the system", correct: false }
      ],
      explanation: "Java's int is always 32 bits, regardless of the underlying system architecture. This is part of Java's 'write once, run anywhere' philosophy."
    },
    {
      question: "Which collection implements a FIFO (First-In-First-Out) structure?",
      answers: [
        { text: "List", correct: false },
        { text: "Set", correct: false },
        { text: "Queue", correct: true },
        { text: "Map", correct: false }
      ],
      explanation: "The Queue interface represents a FIFO structure. Common implementations include LinkedList (as a queue) and PriorityQueue."
    },
    {
      question: "What is the superclass of all classes in Java?",
      answers: [
        { text: "Object", correct: true },
        { text: "Class", correct: false },
        { text: "Main", correct: false },
        { text: "Super", correct: false }
      ],
      explanation: "The Object class is at the root of Java's class hierarchy. All classes, whether built-in or user-defined, implicitly extend Object."
    },
    {
      question: "Which keyword is used to prevent method overriding?",
      answers: [
        { text: "static", correct: false },
        { text: "private", correct: false },
        { text: "final", correct: true },
        { text: "const", correct: false }
      ],
      explanation: "The 'final' keyword prevents a method from being overridden in subclasses. It can also be applied to classes (preventing inheritance) and variables (making them constants)."
    },
    {
      question: "What is the purpose of the 'finally' block in try-catch?",
      answers: [
        { text: "To handle exceptions", correct: false },
        { text: "To run code regardless of exceptions", correct: true },
        { text: "To skip the catch block", correct: false },
        { text: "To terminate the program", correct: false }
      ],
      explanation: "The finally block executes after try/catch, whether an exception occurs or not. It's typically used for cleanup code like closing resources."
    },
    {
      question: "Which interface should be implemented for object comparison?",
      answers: [
        { text: "Serializable", correct: false },
        { text: "Cloneable", correct: false },
        { text: "Comparable", correct: true },
        { text: "Runnable", correct: false }
      ],
      explanation: "Comparable defines the natural ordering of objects via compareTo(). For alternative orderings, use Comparator."
    },
    {
      question: "What is the output of: System.out.println(10 + 20 + \"30\")?",
      answers: [
        { text: "3030", correct: true },
        { text: "60", correct: false },
        { text: "102030", correct: false },
        { text: "3030", correct: false }
      ],
      explanation: "Operations are left-associative. First 10+20=30 (numeric addition), then 30+\"30\" becomes string concatenation resulting in \"3030\"."
    },
    {
      question: "Which is NOT a primitive data type in Java?",
      answers: [
        { text: "int", correct: false },
        { text: "float", correct: false },
        { text: "String", correct: true },
        { text: "boolean", correct: false }
      ],
      explanation: "String is a class, not a primitive type. Java's primitives are: byte, short, int, long, float, double, boolean, and char."
    },
    {
      question: "What is method overloading?",
      answers: [
        { text: "Same method name with different return types", correct: false },
        { text: "Same method name with different parameters", correct: true },
        { text: "Same method name in different classes", correct: false },
        { text: "Same method name in parent and child classes", correct: false }
      ],
      explanation: "Overloading means multiple methods with same name but different parameters (type, number, or order). Return type alone doesn't distinguish overloaded methods."
    },
    {
      question: "Which keyword is used to create an instance of a class?",
      answers: [
        { text: "this", correct: false },
        { text: "super", correct: false },
        { text: "new", correct: true },
        { text: "instance", correct: false }
      ],
      explanation: "The 'new' keyword allocates memory for a new object and calls the constructor. 'this' refers to current object, 'super' to parent class."
    },
    {
      question: "What is the purpose of the 'static' keyword?",
      answers: [
        { text: "To make a variable constant", correct: false },
        { text: "To allow access without creating an instance", correct: true },
        { text: "To prevent inheritance", correct: false },
        { text: "To make a method private", correct: false }
      ],
      explanation: "static members belong to the class rather than instances. They can be accessed via ClassName.memberName without instantiating the class."
    },
    {
      question: "Which package contains the Scanner class?",
      answers: [
        { text: "java.lang", correct: false },
        { text: "java.util", correct: true },
        { text: "java.io", correct: false },
        { text: "java.net", correct: false }
      ],
      explanation: "Scanner is in java.util package, used for parsing primitive types and strings. java.lang contains core classes (automatically imported)."
    },
    {
      question: "What is the default value of an object reference?",
      answers: [
        { text: "0", correct: false },
        { text: "null", correct: true },
        { text: "undefined", correct: false },
        { text: "Depends on the type", correct: false }
      ],
      explanation: "Uninitialized object references default to null. Primitives have different defaults (0, 0.0, false), but all references start as null."
    },
    {
      question: "Which collection does NOT allow duplicate elements?",
      answers: [
        { text: "List", correct: false },
        { text: "Set", correct: true },
        { text: "Map", correct: false },
        { text: "Queue", correct: false }
      ],
      explanation: "Set implementations (like HashSet) enforce uniqueness. Lists allow duplicates, Maps store key-value pairs (unique keys), Queues typically allow duplicates."
    },
    {
      question: "What is the purpose of the 'transient' keyword?",
      answers: [
        { text: "To make a variable thread-safe", correct: false },
        { text: "To prevent serialization", correct: true },
        { text: "To make a variable constant", correct: false },
        { text: "To allow garbage collection", correct: false }
      ],
      explanation: "transient variables are skipped during object serialization. Useful for sensitive data or fields that shouldn't persist (like cached calculations)."
    },
    {
      question: "Which method is called when an object is garbage collected?",
      answers: [
        { text: "finalize()", correct: true },
        { text: "destroy()", correct: false },
        { text: "delete()", correct: false },
        { text: "cleanup()", correct: false }
      ],
      explanation: "finalize() is called by the garbage collector before object destruction. However, its execution isn't guaranteed and it's deprecated since Java 9."
    },
    {
      question: "What is the output of: System.out.println(1 + 2 + \"3\" + 4 + 5)?",
      answers: [
        { text: "3345", correct: true },
        { text: "12345", correct: false },
        { text: "15", correct: false },
        { text: "339", correct: false }
      ],
      explanation: "Operations left-to-right: 1+2=3 (numeric), 3+\"3\"=\"33\" (string), \"33\"+4=\"334\" (string), \"334\"+5=\"3345\" (string)."
    },
    {
      question: "Which is NOT a valid Java identifier?",
      answers: [
        { text: "_variable", correct: false },
        { text: "$variable", correct: false },
        { text: "2variable", correct: true },
        { text: "variable2", correct: false }
      ],
      explanation: "Identifiers can't start with digits but can contain them. They can start with letters, $, or _. Unicode characters are also allowed after the first character."
    },
    {
      question: "What is the purpose of the 'volatile' keyword?",
      answers: [
        { text: "To make a variable constant", correct: false },
        { text: "To indicate a variable may change unexpectedly", correct: true },
        { text: "To prevent method overriding", correct: false },
        { text: "To allow access from multiple threads", correct: false }
      ],
      explanation: "volatile ensures variable reads/writes go directly to main memory (not CPU cache), making it thread-safe for simple operations."
    },
    {
      question: "Which annotation indicates a method overrides a superclass method?",
      answers: [
        { text: "@Override", correct: true },
        { text: "@Super", correct: false },
        { text: "@Inherit", correct: false },
        { text: "@Parent", correct: false }
      ],
      explanation: "@Override tells the compiler the method is intended to override a superclass method. It generates an error if no such method exists to override."
    },
    {
      question: "What is the purpose of the 'assert' keyword?",
      answers: [
        { text: "To test assumptions in the code", correct: true },
        { text: "To handle exceptions", correct: false },
        { text: "To create assertions in JUnit", correct: false },
        { text: "To verify method parameters", correct: false }
      ],
      explanation: "assert throws AssertionError if its boolean expression is false. Mainly for debugging (disabled by default with -ea flag to enable)."
    },
    {
      question: "Which interface provides the 'compareTo()' method?",
      answers: [
        { text: "Serializable", correct: false },
        { text: "Comparable", correct: true },
        { text: "Comparator", correct: false },
        { text: "Runnable", correct: false }
      ],
      explanation: "Comparable defines natural ordering with compareTo(). Comparator is an alternative ordering interface with compare()."
    },
    {
      question: "What is the output of: System.out.println(Math.min(Double.MIN_VALUE, 0.0d))?",
      answers: [
        { text: "0.0", correct: true },
        { text: "Double.MIN_VALUE", correct: false },
        { text: "Negative infinity", correct: false },
        { text: "NaN", correct: false }
      ],
      explanation: "Double.MIN_VALUE is the smallest positive value (≈4.9E-324), not the most negative. So 0.0 is smaller than this positive minimum."
    },
    {
      question: "Which is NOT a valid Java 8 feature?",
      answers: [
        { text: "Lambda expressions", correct: false },
        { text: "Stream API", correct: false },
        { text: "Modules", correct: true },
        { text: "Default methods in interfaces", correct: false }
      ],
      explanation: "Modules were introduced in Java 9. Java 8 introduced lambdas, streams, default methods, Optional, and the new Date/Time API."
    },
    {
      question: "What is the purpose of the 'Optional' class?",
      answers: [
        { text: "To handle null values more elegantly", correct: true },
        { text: "To create optional parameters", correct: false },
        { text: "To make fields optional in serialization", correct: false },
        { text: "To provide alternative implementations", correct: false }
      ],
      explanation: "Optional is a container that may or may not contain a non-null value. It helps avoid NullPointerExceptions and makes null checks more explicit."
    },
    {
      question: "Which method is used to sort a List in Java 8?",
      answers: [
        { text: "Collections.sort()", correct: false },
        { text: "List.sort()", correct: true },
        { text: "Arrays.sort()", correct: false },
        { text: "Sort.sort()", correct: false }
      ],
      explanation: "Java 8 added the sort() method directly to the List interface, which can take a Comparator. Collections.sort() still works but List.sort() is preferred."
    }
  ],
  python: [
    {
      question: "What is the output of: print(type([]))?",
      answers: [
        { text: "<class 'list'>", correct: true },
        { text: "<class 'tuple'>", correct: false },
        { text: "<class 'dict'>", correct: false },
        { text: "<class 'set'>", correct: false }
      ],
      explanation: "The type() function returns the class type of the object passed as parameter. When you pass an empty list [], it returns <class 'list'> which indicates that the object is of list type."
    },
    {
      question: "Which keyword is used to define a function in Python?",
      answers: [
        { text: "def", correct: true },
        { text: "function", correct: false },
        { text: "define", correct: false },
        { text: "func", correct: false }
      ],
      explanation: "In Python, the 'def' keyword is used to define a function. The syntax is: def function_name(parameters): followed by the function body."
    },
    {
      question: "What is the output of: print(3 * 'abc')?",
      answers: [
        { text: "abcabcabc", correct: true },
        { text: "3abc", correct: false },
        { text: "abc3", correct: false },
        { text: "Error", correct: false }
      ],
      explanation: "When you multiply a string by an integer in Python, it performs string repetition. So 3 * 'abc' concatenates the string 'abc' three times, resulting in 'abcabcabc'."
    },
    {
      question: "Which is NOT a mutable data type in Python?",
      answers: [
        { text: "list", correct: false },
        { text: "dict", correct: false },
        { text: "set", correct: false },
        { text: "tuple", correct: true }
      ],
      explanation: "In Python, tuples are immutable (cannot be changed after creation), while lists, dictionaries, and sets are mutable. Once a tuple is created, you cannot modify its elements."
    },
    {
      question: "What does the 'pass' statement do?",
      answers: [
        { text: "Terminates the program", correct: false },
        { text: "Skips the current iteration", correct: false },
        { text: "Acts as a placeholder", correct: true },
        { text: "Passes arguments to a function", correct: false }
      ],
      explanation: "The 'pass' statement is a null operation in Python - it does nothing. It's used as a placeholder when a statement is required syntactically but you don't want any code to execute."
    },
    {
      question: "Which module is used for working with regular expressions?",
      answers: [
        { text: "regex", correct: false },
        { text: "re", correct: true },
        { text: "pyregex", correct: false },
        { text: "regexp", correct: false }
      ],
      explanation: "The 're' module provides regular expression matching operations similar to those found in Perl. It's Python's built-in module for working with regular expressions."
    },
    {
      question: "What is the output of: print(bool('False'))?",
      answers: [
        { text: "False", correct: false },
        { text: "True", correct: true },
        { text: "Error", correct: false },
        { text: "None", correct: false }
      ],
      explanation: "The bool() function returns True for any non-empty string, even if the string is 'False'. Only empty strings evaluate to False in Python."
    },
    {
      question: "Which operator is used for exponentiation?",
      answers: [
        { text: "^", correct: false },
        { text: "**", correct: true },
        { text: "^^", correct: false },
        { text: "*^", correct: false }
      ],
      explanation: "The double asterisk ** is Python's exponentiation operator. For example, 2**3 evaluates to 8 (2 raised to the power of 3)."
    },
    {
      question: "What is the purpose of the '__init__' method?",
      answers: [
        { text: "To initialize a class", correct: true },
        { text: "To create an instance", correct: false },
        { text: "To import modules", correct: false },
        { text: "To terminate a program", correct: false }
      ],
      explanation: "__init__ is a special method in Python classes that gets called when an object is instantiated. It's used to initialize the object's attributes and is commonly known as the constructor."
    },
    {
      question: "Which is used to create a virtual environment?",
      answers: [
        { text: "venv", correct: true },
        { text: "virtualenv", correct: false },
        { text: "pyenv", correct: false },
        { text: "env", correct: false }
      ],
      explanation: "Python's built-in 'venv' module is used to create lightweight virtual environments. Each virtual environment has its own Python binary and can have independent sets of installed packages."
    },
    {
      question: "What is the output of: print([1, 2, 3][1:])?",
      answers: [
        { text: "[1]", correct: false },
        { text: "[2]", correct: false },
        { text: "[2, 3]", correct: true },
        { text: "[1, 2, 3]", correct: false }
      ],
      explanation: "Slicing a list with [1:] means 'from index 1 to the end'. So it returns a new list containing elements from index 1 onwards, which are [2, 3]."
    },
    {
      question: "Which is NOT a Python built-in function?",
      answers: [
        { text: "print()", correct: false },
        { text: "input()", correct: false },
        { text: "main()", correct: true },
        { text: "len()", correct: false }
      ],
      explanation: "main() is not a built-in function in Python. It's a conventional name for the main function in many programming languages, but in Python it's just a regular function name if you choose to use it."
    },
    {
      question: "What is the purpose of 'if __name__ == '__main__':'?",
      answers: [
        { text: "To check if the script is imported", correct: false },
        { text: "To check if the script is run directly", correct: true },
        { text: "To define the main function", correct: false },
        { text: "To import the main module", correct: false }
      ],
      explanation: "This idiom checks if the script is being run directly (not imported). Code under this block will only execute when the script is run directly, allowing modules to be imported without running their executable code."
    },
    {
      question: "Which method is used to read a line from a file?",
      answers: [
        { text: "read()", correct: false },
        { text: "readline()", correct: true },
        { text: "readlines()", correct: false },
        { text: "getline()", correct: false }
      ],
      explanation: "The readline() method reads a single line from the file each time it's called, while read() reads the entire file and readlines() reads all lines into a list."
    },
    {
      question: "What is the output of: print(0.1 + 0.2 == 0.3)?",
      answers: [
        { text: "True", correct: false },
        { text: "False", correct: true },
        { text: "Error", correct: false },
        { text: "None", correct: false }
      ],
      explanation: "Due to floating-point precision issues, 0.1 + 0.2 doesn't exactly equal 0.3 in binary floating-point arithmetic. This is a common issue in many programming languages, not just Python."
    },
    {
      question: "Which is used to handle exceptions?",
      answers: [
        { text: "try-catch", correct: false },
        { text: "try-except", correct: true },
        { text: "try-rescue", correct: false },
        { text: "try-finally", correct: false }
      ],
      explanation: "Python uses try-except blocks for exception handling. The code that might raise an exception goes in the try block, and the exception handling code goes in the except block."
    },
    {
      question: "What is the purpose of the 'yield' keyword?",
      answers: [
        { text: "To return a value from a function", correct: false },
        { text: "To create a generator", correct: true },
        { text: "To pause program execution", correct: false },
        { text: "To yield control to another thread", correct: false }
      ],
      explanation: "The yield keyword is used in generator functions to produce a sequence of values over time, pausing execution after each yield and resuming where it left off when next called."
    },
    {
      question: "Which is NOT a Python web framework?",
      answers: [
        { text: "Django", correct: false },
        { text: "Flask", correct: false },
        { text: "Pyramid", correct: false },
        { text: "Spring", correct: true }
      ],
      explanation: "Spring is a Java framework, not a Python one. Django, Flask, and Pyramid are all popular Python web frameworks."
    },
    {
      question: "What is the output of: print('Hello'.upper())?",
      answers: [
        { text: "hello", correct: false },
        { text: "HELLO", correct: true },
        { text: "Hello", correct: false },
        { text: "Error", correct: false }
      ],
      explanation: "The upper() string method converts all characters in the string to uppercase, so 'Hello' becomes 'HELLO'."
    },
    {
      question: "Which is used to install Python packages?",
      answers: [
        { text: "npm", correct: false },
        { text: "pip", correct: true },
        { text: "apt", correct: false },
        { text: "yum", correct: false }
      ],
      explanation: "pip is Python's package installer. It's used to install and manage Python packages from the Python Package Index (PyPI) and other package indexes."
    },
    {
      question: "What is the purpose of the 'with' statement?",
      answers: [
        { text: "To create a context manager", correct: true },
        { text: "To define a loop", correct: false },
        { text: "To import modules", correct: false },
        { text: "To handle exceptions", correct: false }
      ],
      explanation: "The 'with' statement is used to wrap the execution of a block with methods defined by a context manager, ensuring proper acquisition and release of resources (like files)."
    },
    {
      question: "Which is NOT a valid Python variable name?",
      answers: [
        { text: "_variable", correct: false },
        { text: "variable_name", correct: false },
        { text: "VariableName", correct: false },
        { text: "1variable", correct: true }
      ],
      explanation: "Variable names in Python cannot start with a number. They must start with a letter or underscore, and can only contain letters, numbers, and underscores."
    },
    {
      question: "What is the output of: print(2 ** 3 ** 2)?",
      answers: [
        { text: "64", correct: false },
        { text: "512", correct: true },
        { text: "Error", correct: false },
        { text: "None", correct: false }
      ],
      explanation: "Exponentiation in Python is right-associative, so 2 ** 3 ** 2 is evaluated as 2 ** (3 ** 2) = 2 ** 9 = 512, not (2 ** 3) ** 2 which would be 64."
    },
    {
      question: "Which is used to create an anonymous function?",
      answers: [
        { text: "def", correct: false },
        { text: "lambda", correct: true },
        { text: "function", correct: false },
        { text: "anon", correct: false }
      ],
      explanation: "Lambda functions are anonymous functions defined with the lambda keyword. They can have any number of arguments but only one expression, which is evaluated and returned."
    },
    {
      question: "What is the purpose of the 'self' parameter?",
      answers: [
        { text: "To refer to the class instance", correct: true },
        { text: "To refer to the parent class", correct: false },
        { text: "To refer to static methods", correct: false },
        { text: "To refer to global variables", correct: false }
      ],
      explanation: "self represents the instance of the class. By using self, you can access the attributes and methods of the class in Python. It's automatically passed to instance methods."
    },
    {
      question: "Which is used to measure code execution time?",
      answers: [
        { text: "timeit", correct: true },
        { text: "timer", correct: false },
        { text: "clock", correct: false },
        { text: "stopwatch", correct: false }
      ],
      explanation: "The timeit module provides a simple way to time small bits of Python code. It avoids a number of common traps for measuring execution times."
    },
    {
      question: "What is the output of: print('Hello'[::-1])?",
      answers: [
        { text: "Hello", correct: false },
        { text: "olleH", correct: true },
        { text: "Error", correct: false },
        { text: "None", correct: false }
      ],
      explanation: "The slice [::-1] means start at the end of the string and end at position 0, moving with step -1 (one step backward). This effectively reverses the string."
    },
    {
      question: "Which is NOT a Python data structure?",
      answers: [
        { text: "list", correct: false },
        { text: "tuple", correct: false },
        { text: "array", correct: false },
        { text: "vector", correct: true }
      ],
      explanation: "Python has lists (similar to arrays), tuples, and arrays (from the array module), but doesn't have a built-in 'vector' type. Vectors are typically found in other languages or specialized libraries like NumPy."
    },
    {
      question: "What is the purpose of the 'global' keyword?",
      answers: [
        { text: "To declare a global variable", correct: true },
        { text: "To import global modules", correct: false },
        { text: "To access built-in functions", correct: false },
        { text: "To define a global function", correct: false }
      ],
      explanation: "The global keyword allows you to modify a variable outside the current scope. It's used to declare that a variable inside a function is global (not local)."
    },
    {
      question: "Which is used to format strings in Python 3.6+?",
      answers: [
        { text: "% formatting", correct: false },
        { text: "str.format()", correct: false },
        { text: "f-strings", correct: true },
        { text: "template strings", correct: false }
      ],
      explanation: "f-strings (formatted string literals) were introduced in Python 3.6. They provide a concise and convenient way to embed expressions inside string literals using {expression} syntax."
    }
  ],
  c: [
    {
      question: "What is the correct syntax for a main function in C?",
      answers: [
        { text: "int main()", correct: true },
        { text: "void main()", correct: false },
        { text: "main()", correct: false },
        { text: "function main()", correct: false }
      ],
      explanation: "The standard way to define the main function in C is 'int main()' which returns an integer to indicate program status. While some compilers accept 'void main()', it's not standard C and should be avoided for portability."
    },
    {
      question: "Which operator is used to access memory addresses?",
      answers: [
        { text: "*", correct: false },
        { text: "&", correct: true },
        { text: "#", correct: false },
        { text: "@", correct: false }
      ],
      explanation: "The ampersand (&) is the address-of operator in C. It returns the memory address of its operand. For example, &variable gives the address where 'variable' is stored in memory."
    },
    {
      question: "What is the size of 'int' in a 32-bit system?",
      answers: [
        { text: "2 bytes", correct: false },
        { text: "4 bytes", correct: true },
        { text: "8 bytes", correct: false },
        { text: "Depends on compiler", correct: false }
      ],
      explanation: "In most 32-bit systems, an int is typically 4 bytes (32 bits). However, the exact size can vary between compilers, which is why the sizeof() operator is preferred for portability."
    },
    {
      question: "Which is NOT a valid storage class specifier?",
      answers: [
        { text: "auto", correct: false },
        { text: "register", correct: false },
        { text: "static", correct: false },
        { text: "local", correct: true }
      ],
      explanation: "C has four storage class specifiers: auto, register, static, and extern. 'local' is not a storage class specifier in C, though it's sometimes used informally to describe function-local variables."
    },
    {
      question: "What is the output of: printf(\"%d\", sizeof('a'));",
      answers: [
        { text: "1", correct: false },
        { text: "2", correct: false },
        { text: "4", correct: true },
        { text: "8", correct: false }
      ],
      explanation: "In C, character constants like 'a' are of type int, not char. Therefore sizeof('a') returns the size of an int, which is typically 4 bytes on 32-bit systems."
    },
    {
      question: "Which header file is needed for dynamic memory allocation?",
      answers: [
        { text: "<stdio.h>", correct: false },
        { text: "<stdlib.h>", correct: true },
        { text: "<memory.h>", correct: false },
        { text: "<alloc.h>", correct: false }
      ],
      explanation: "The <stdlib.h> header contains declarations for malloc(), calloc(), realloc(), and free() functions used for dynamic memory allocation in C."
    },
    {
      question: "What does the 'volatile' keyword indicate?",
      answers: [
        { text: "The variable is constant", correct: false },
        { text: "The variable may change unexpectedly", correct: true },
        { text: "The variable is thread-safe", correct: false },
        { text: "The variable is stored in register", correct: false }
      ],
      explanation: "volatile tells the compiler that a variable's value may change at any time without any action being taken by the code (e.g., by hardware or another thread). This prevents compiler optimizations that might cache the value."
    },
    {
      question: "Which is NOT a valid loop in C?",
      answers: [
        { text: "for", correct: false },
        { text: "while", correct: false },
        { text: "do-while", correct: false },
        { text: "repeat-until", correct: true }
      ],
      explanation: "C has three loop constructs: for, while, and do-while. 'repeat-until' is not a valid loop in C (though it exists in some other languages like Pascal)."
    },
    {
      question: "What is the purpose of the 'typedef' keyword?",
      answers: [
        { text: "To define a new type", correct: true },
        { text: "To declare a variable", correct: false },
        { text: "To include a header file", correct: false },
        { text: "To create a macro", correct: false }
      ],
      explanation: "typedef is used to create an alias name for existing data types. It doesn't create a new type but provides a new name for an existing type, often used to simplify complex declarations."
    },
    {
      question: "Which operator has the highest precedence?",
      answers: [
        { text: "&&", correct: false },
        { text: "||", correct: false },
        { text: "()", correct: true },
        { text: "=", correct: false }
      ],
      explanation: "Parentheses () have the highest precedence in C. They can be used to override the default operator precedence and force certain evaluation orders in expressions."
    },
    {
      question: "What is the output of: printf(\"%d\", 5 / 2);",
      answers: [
        { text: "2.5", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "2.0", correct: false }
      ],
      explanation: "In C, integer division truncates the fractional part. 5/2 performs integer division resulting in 2, not 2.5. To get floating-point division, at least one operand should be a floating-point number (e.g., 5.0/2)."
    },
    {
      question: "Which is NOT a valid pointer declaration?",
      answers: [
        { text: "int *p;", correct: false },
        { text: "int* p;", correct: false },
        { text: "int * p;", correct: false },
        { text: "int p*;", correct: true }
      ],
      explanation: "In C, the asterisk must be adjacent to either the type or the variable name, but not after the variable name. 'int p*' is invalid syntax for pointer declaration."
    },
    {
      question: "What is the purpose of the 'const' keyword?",
      answers: [
        { text: "To make a variable constant", correct: true },
        { text: "To declare a constructor", correct: false },
        { text: "To include constants from a header", correct: false },
        { text: "To create a constant pointer", correct: false }
      ],
      explanation: "const indicates that a variable's value cannot be changed after initialization. It helps prevent accidental modifications and can enable compiler optimizations."
    },
    {
      question: "Which function is used to compare two strings?",
      answers: [
        { text: "strcmp()", correct: true },
        { text: "strcompare()", correct: false },
        { text: "strdiff()", correct: false },
        { text: "compare()", correct: false }
      ],
      explanation: "strcmp() (string compare) is the standard library function for comparing two strings in C. It returns 0 if equal, <0 if first string is less, and >0 if first string is greater."
    },
    {
      question: "What is the output of: printf(\"%d\", sizeof(\"Hello\"));",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "4", correct: false },
        { text: "8", correct: false }
      ],
      explanation: "sizeof(\"Hello\") returns 6 because it counts all characters plus the null terminator ('\\0') that C automatically adds to string literals. 'Hello' is 5 chars + 1 null byte = 6 bytes."
    },
    {
      question: "Which is NOT a valid file opening mode?",
      answers: [
        { text: "r", correct: false },
        { text: "w", correct: false },
        { text: "a", correct: false },
        { text: "x", correct: true }
      ],
      explanation: "Standard file opening modes in C include: 'r' (read), 'w' (write), 'a' (append), 'r+' (read/write), etc. 'x' is not a standard file opening mode in C."
    },
    {
      question: "What is the purpose of the 'extern' keyword?",
      answers: [
        { text: "To declare an external variable", correct: true },
        { text: "To include external files", correct: false },
        { text: "To make a variable global", correct: false },
        { text: "To export a function", correct: false }
      ],
      explanation: "extern declares a variable or function that is defined in another source file (external linkage). It tells the compiler the variable exists elsewhere and should be linked during compilation."
    },
    {
      question: "Which is NOT a valid format specifier?",
      answers: [
        { text: "%d", correct: false },
        { text: "%f", correct: false },
        { text: "%s", correct: false },
        { text: "%c", correct: false },
        { text: "%z", correct: true }
      ],
      explanation: "Standard format specifiers include %d (int), %f (float), %s (string), %c (char), etc. %z is not a standard format specifier in C (though %zu exists for size_t in C99 and later)."
    },
    {
      question: "What is the output of: printf(\"%d\", ~5); (assuming 4-byte int)",
      answers: [
        { text: "5", correct: false },
        { text: "-5", correct: false },
        { text: "-6", correct: true },
        { text: "4", correct: false }
      ],
      explanation: "The ~ operator performs bitwise NOT (flips all bits). For 4-byte int, 5 is 000...0101, ~5 is 111...1010 which is -6 in two's complement representation."
    },
    {
      question: "Which is NOT a valid storage duration?",
      answers: [
        { text: "automatic", correct: false },
        { text: "static", correct: false },
        { text: "thread", correct: false },
        { text: "global", correct: true }
      ],
      explanation: "C has four storage durations: automatic (local variables), static (static variables), thread (C11, thread_local), and allocated (dynamic memory). 'global' is not a formal storage duration in C."
    },
    {
      question: "What is the purpose of the 'register' keyword?",
      answers: [
        { text: "To store variable in register", correct: true },
        { text: "To register a function", correct: false },
        { text: "To create a counter", correct: false },
        { text: "To optimize loops", correct: false }
      ],
      explanation: "register suggests to the compiler that the variable should be stored in a CPU register for faster access. However, modern compilers typically ignore this as they can optimize better than programmers."
    },
    {
      question: "Which is NOT a valid jump statement?",
      answers: [
        { text: "break", correct: false },
        { text: "continue", correct: false },
        { text: "goto", correct: false },
        { text: "skip", correct: true }
      ],
      explanation: "C has four jump statements: break, continue, goto, and return. 'skip' is not a valid jump statement in C."
    },
    {
      question: "What is the output of: printf(\"%d\", 5 << 2);",
      answers: [
        { text: "10", correct: false },
        { text: "20", correct: true },
        { text: "7", correct: false },
        { text: "25", correct: false }
      ],
      explanation: "The << operator is a left bit shift. 5 in binary is 101. Shifting left by 2 positions gives 10100 which is 20 in decimal (equivalent to multiplying by 4)."
    },
    {
      question: "Which is NOT a valid C standard?",
      answers: [
        { text: "C89", correct: false },
        { text: "C99", correct: false },
        { text: "C11", correct: false },
        { text: "C15", correct: true }
      ],
      explanation: "The major C standards are C89 (ANSI C), C99, C11, and C17/C18. There is no C15 standard. C20 is being worked on but isn't officially released yet."
    },
    {
      question: "What is the purpose of the 'restrict' keyword?",
      answers: [
        { text: "To restrict variable scope", correct: false },
        { text: "To optimize pointer aliasing", correct: true },
        { text: "To prevent modification", correct: false },
        { text: "To create read-only variables", correct: false }
      ],
      explanation: "restrict is a type qualifier for pointers that tells the compiler these pointers don't alias (point to the same memory location), enabling optimizations."
    },
    {
      question: "Which function is used to allocate memory?",
      answers: [
        { text: "malloc()", correct: true },
        { text: "alloc()", correct: false },
        { text: "new()", correct: false },
        { text: "create()", correct: false }
      ],
      explanation: "malloc() (memory allocation) is the standard C library function for dynamic memory allocation. It allocates a block of uninitialized memory of the requested size."
    },
    {
      question: "What is the output of: printf(\"%d\", sizeof(int*));",
      answers: [
        { text: "2", correct: false },
        { text: "4", correct: false },
        { text: "8", correct: false },
        { text: "Depends on system", correct: true }
      ],
      explanation: "The size of a pointer depends on the system architecture - typically 4 bytes on 32-bit systems and 8 bytes on 64-bit systems. sizeof(int*) returns the size of an integer pointer."
    },
    {
      question: "Which is NOT a valid type qualifier?",
      answers: [
        { text: "const", correct: false },
        { text: "volatile", correct: false },
        { text: "restrict", correct: false },
        { text: "static", correct: true }
      ],
      explanation: "C has three type qualifiers: const, volatile, and restrict (C99). 'static' is a storage class specifier, not a type qualifier."
    },
    {
      question: "What is the purpose of the 'inline' keyword?",
      answers: [
        { text: "To suggest function inlining", correct: true },
        { text: "To create one-line functions", correct: false },
        { text: "To define inline variables", correct: false },
        { text: "To optimize loops", correct: false }
      ],
      explanation: "inline suggests to the compiler that it should attempt to embed the function code directly at the call site rather than performing a regular function call. The compiler may ignore this hint."
    },
    {
      question: "Which is NOT a valid way to pass arguments?",
      answers: [
        { text: "Call by value", correct: false },
        { text: "Call by reference", correct: false },
        { text: "Call by name", correct: true },
        { text: "Call by address", correct: false }
      ],
      explanation: "C only supports call by value - passing copies of arguments. 'Call by reference' can be simulated using pointers (call by address). 'Call by name' is not supported in C (it exists in some other languages like Algol)."
    }
  ],
  cpp: [
    {
      question: "What does 'cout' represent in C++?",
      answers: [
        { text: "Character output", correct: false },
        { text: "Compile out", correct: false },
        { text: "Console output stream", correct: true },
        { text: "Copy out", correct: false }
      ],
      explanation: "cout is the standard output stream object in C++, defined in the iostream header. It's used with the insertion operator (<<) to display output to the console."
    },
    {
      question: "Which keyword is used to create a class in C++?",
      answers: [
        { text: "class", correct: true },
        { text: "struct", correct: false },
        { text: "object", correct: false },
        { text: "new", correct: false }
      ],
      explanation: "The 'class' keyword is used to define a new class in C++. A class is a user-defined type that encapsulates data and functions that operate on that data."
    },
    {
      question: "What is the output of: cout << (5 / 2);",
      answers: [
        { text: "2.5", correct: false },
        { text: "2", correct: true },
        { text: "3", correct: false },
        { text: "2.0", correct: false }
      ],
      explanation: "In C++, division of two integers performs integer division, which truncates any fractional part. 5/2 equals 2, not 2.5. To get floating-point division, at least one operand should be a floating-point number."
    },
    {
      question: "Which is NOT an OOP feature in C++?",
      answers: [
        { text: "Encapsulation", correct: false },
        { text: "Inheritance", correct: false },
        { text: "Polymorphism", correct: false },
        { text: "Instantiation", correct: true }
      ],
      explanation: "The four main OOP features in C++ are encapsulation, inheritance, polymorphism, and abstraction. Instantiation is the process of creating objects from classes, not an OOP feature itself."
    },
    {
      question: "What is the purpose of the 'new' operator?",
      answers: [
        { text: "To create a new variable", correct: false },
        { text: "To allocate memory dynamically", correct: true },
        { text: "To define a new class", correct: false },
        { text: "To create a new namespace", correct: false }
      ],
      explanation: "The 'new' operator allocates memory on the heap for an object and returns a pointer to it. It calls the object's constructor and is paired with 'delete' for memory management."
    },
    {
      question: "Which access specifier is default for class members?",
      answers: [
        { text: "public", correct: false },
        { text: "private", correct: true },
        { text: "protected", correct: false },
        { text: "internal", correct: false }
      ],
      explanation: "In C++, class members are private by default. This means they can only be accessed by member functions of the same class unless explicitly declared public or protected."
    },
    {
      question: "What is the output of: cout << sizeof('a');",
      answers: [
        { text: "1", correct: true },
        { text: "2", correct: false },
        { text: "4", correct: false },
        { text: "8", correct: false }
      ],
      explanation: "In C++, character literals are of type char (1 byte), unlike in C where they're ints. Therefore sizeof('a') returns 1 in C++."
    },
    {
      question: "Which is NOT a valid C++ standard?",
      answers: [
        { text: "C++98", correct: false },
        { text: "C++11", correct: false },
        { text: "C++14", correct: false },
        { text: "C++15", correct: true }
      ],
      explanation: "The major C++ standards are C++98, C++11, C++14, C++17, and C++20. There is no C++15 standard."
    },
    {
      question: "What is the purpose of the 'virtual' keyword?",
      answers: [
        { text: "To create virtual machines", correct: false },
        { text: "To enable polymorphism", correct: true },
        { text: "To optimize performance", correct: false },
        { text: "To create abstract classes", correct: false }
      ],
      explanation: "The 'virtual' keyword enables dynamic polymorphism by allowing derived classes to override base class methods. It's essential for runtime method resolution through virtual function tables."
    },
    {
      question: "Which operator is used for dynamic casting?",
      answers: [
        { text: "static_cast", correct: false },
        { text: "dynamic_cast", correct: true },
        { text: "reinterpret_cast", correct: false },
        { text: "const_cast", correct: false }
      ],
      explanation: "dynamic_cast is used for safe downcasting in polymorphic class hierarchies. It performs runtime type checking and returns nullptr if the cast is invalid for pointers (throws bad_cast for references)."
    },
    {
      question: "What is the output of: cout << (true && false);",
      answers: [
        { text: "true", correct: false },
        { text: "false", correct: true },
        { text: "1", correct: false },
        { text: "0", correct: true }
      ],
      explanation: "The logical AND (&&) operator returns true only if both operands are true. Since false is one operand, the result is false, which cout displays as 0 (or 'false' if using boolalpha)."
    },
    {
      question: "Which is NOT a valid STL container?",
      answers: [
        { text: "vector", correct: false },
        { text: "list", correct: false },
        { text: "array", correct: false },
        { text: "stack", correct: false },
        { text: "tree", correct: true }
      ],
      explanation: "The STL provides sequence containers (vector, list, array) and container adapters (stack, queue), but there is no direct 'tree' container. For tree structures, you'd typically use map/set (which are implemented as red-black trees)."
    },
    {
      question: "What is the purpose of the 'this' pointer?",
      answers: [
        { text: "To refer to the current object", correct: true },
        { text: "To refer to the parent class", correct: false },
        { text: "To refer to static members", correct: false },
        { text: "To refer to global variables", correct: false }
      ],
      explanation: "The 'this' pointer is an implicit parameter in all non-static member functions. It points to the object for which the member function was called, allowing access to the object's members."
    },
    {
      question: "Which is used for function overloading?",
      answers: [
        { text: "Same function name with different return types", correct: false },
        { text: "Same function name with different parameters", correct: true },
        { text: "Same function name in different classes", correct: false },
        { text: "Same function name in parent and child classes", correct: false }
      ],
      explanation: "Function overloading in C++ is achieved by having multiple functions with the same name but different parameters (type, number, or order). Return type alone doesn't distinguish overloads."
    },
    {
      question: "What is the output of: cout << (5 == 5.0);",
      answers: [
        { text: "true", correct: true },
        { text: "false", correct: false },
        { text: "1", correct: true },
        { text: "0", correct: false }
      ],
      explanation: "The equality operator (==) performs implicit conversion between numeric types. 5 (int) is converted to 5.0 (double) before comparison, resulting in true (displayed as 1 by default)."
    },
    {
      question: "Which is NOT a valid smart pointer?",
      answers: [
        { text: "unique_ptr", correct: false },
        { text: "shared_ptr", correct: false },
        { text: "weak_ptr", correct: false },
        { text: "raw_ptr", correct: true }
      ],
      explanation: "C++ provides unique_ptr, shared_ptr, and weak_ptr as smart pointers in the <memory> header. 'raw_ptr' is not a standard smart pointer type - it's a term sometimes used to refer to regular C-style pointers."
    },
    {
      question: "What is the purpose of the 'friend' keyword?",
      answers: [
        { text: "To allow access to private members", correct: true },
        { text: "To create friend classes", correct: false },
        { text: "To define relationships between classes", correct: false },
        { text: "To enable inheritance", correct: false }
      ],
      explanation: "A friend function or class has access to private and protected members of the class in which it is declared as a friend. This breaks encapsulation and should be used sparingly."
    },
    {
      question: "Which is used for exception handling?",
      answers: [
        { text: "try-catch", correct: true },
        { text: "try-except", correct: false },
        { text: "try-finally", correct: false },
        { text: "try-rescue", correct: false }
      ],
      explanation: "C++ uses try-catch blocks for exception handling. Code that might throw exceptions goes in the try block, and exception handlers are defined in catch blocks. C++ also has finally in some implementations but it's not standard."
    },
    {
      question: "What is the output of: cout << sizeof(\"Hello\");",
      answers: [
        { text: "5", correct: false },
        { text: "6", correct: true },
        { text: "4", correct: false },
        { text: "8", correct: false }
      ],
      explanation: "sizeof(\"Hello\") returns 6 because it includes the null terminator ('\\0') that C++ automatically adds to string literals. 'Hello' is 5 chars + 1 null byte = 6 bytes total."
    },
    {
      question: "Which is NOT a valid C++ feature?",
      answers: [
        { text: "Templates", correct: false },
        { text: "Lambda expressions", correct: false },
        { text: "Garbage collection", correct: true },
        { text: "Multiple inheritance", correct: false }
      ],
      explanation: "C++ doesn't have built-in garbage collection (unlike Java or C#). Memory management is primarily manual through new/delete or via smart pointers. The other options are all valid C++ features."
    },
    {
      question: "What is the purpose of the 'override' keyword?",
      answers: [
        { text: "To override operators", correct: false },
        { text: "To indicate a method overrides a virtual method", correct: true },
        { text: "To force method overriding", correct: false },
        { text: "To replace inherited methods", correct: false }
      ],
      explanation: "The 'override' specifier (since C++11) explicitly indicates that a virtual function is intended to override a base class virtual function. It helps catch errors if the function doesn't actually override anything."
    },
    {
      question: "Which is used to create a thread in C++11?",
      answers: [
        { text: "<thread>", correct: true },
        { text: "<mutex>", correct: false },
        { text: "<atomic>", correct: false },
        { text: "<parallel>", correct: false }
      ],
      explanation: "The <thread> header (introduced in C++11) provides the std::thread class for creating and managing threads. It represents a single thread of execution."
    },
    {
      question: "What is the output of: cout << (10 >> 1);",
      answers: [
        { text: "5", correct: true },
        { text: "10", correct: false },
        { text: "20", correct: false },
        { text: "1", correct: false }
      ],
      explanation: "The >> operator performs a bitwise right shift. Shifting 10 (binary 1010) right by 1 position gives 5 (binary 0101), which is equivalent to integer division by 2."
    },
    {
      question: "Which is NOT a valid type of inheritance?",
      answers: [
        { text: "Single", correct: false },
        { text: "Multiple", correct: false },
        { text: "Multilevel", correct: false },
        { text: "Parallel", correct: true }
      ],
      explanation: "C++ supports single, multiple, multilevel, hierarchical, and hybrid inheritance. 'Parallel' inheritance is not a standard term in C++ inheritance types."
    },
    {
      question: "What is the purpose of the 'constexpr' keyword?",
      answers: [
        { text: "To declare constant expressions", correct: true },
        { text: "To create constant variables", correct: false },
        { text: "To define constructors", correct: false },
        { text: "To optimize loops", correct: false }
      ],
      explanation: "constexpr (since C++11) indicates that a variable or function can be evaluated at compile time. This enables performance optimizations and allows usage in contexts requiring constant expressions."
    },
    {
      question: "Which is used to create a move constructor?",
      answers: [
        { text: "ClassName(ClassName&)", correct: false },
        { text: "ClassName(const ClassName&)", correct: false },
        { text: "ClassName(ClassName&&)", correct: true },
        { text: "ClassName(const ClassName&&)", correct: false }
      ],
      explanation: "A move constructor takes an rvalue reference (ClassName&&) as its parameter. It's used to efficiently transfer resources from a temporary object rather than copying them."
    },
    {
      question: "What is the output of: auto x = {1, 2, 3}; cout << typeid(x).name();",
      answers: [
        { text: "int[]", correct: false },
        { text: "vector<int>", correct: false },
        { text: "initializer_list<int>", correct: true },
        { text: "array<int,3>", correct: false }
      ],
      explanation: "The braced initializer {1,2,3} creates a std::initializer_list<int> when used with auto. This is a lightweight proxy object for array initialization introduced in C++11."
    },
    {
      question: "Which is NOT a valid C++ cast?",
      answers: [
        { text: "static_cast", correct: false },
        { text: "dynamic_cast", correct: false },
        { text: "reinterpret_cast", correct: false },
        { text: "generic_cast", correct: true }
      ],
      explanation: "C++ has four named cast operators: static_cast, dynamic_cast, const_cast, and reinterpret_cast. 'generic_cast' is not a valid C++ cast operator."
    },
    {
      question: "What is the purpose of the 'noexcept' specifier?",
      answers: [
        { text: "To indicate a function throws no exceptions", correct: true },
        { text: "To prevent exception handling", correct: false },
        { text: "To optimize try-catch blocks", correct: false },
        { text: "To disable exceptions", correct: false }
      ],
      explanation: "noexcept (since C++11) specifies that a function doesn't throw exceptions. This enables optimizations and allows compile-time checking of exception safety guarantees."
    },
    {
      question: "Which is used to create a variadic template?",
      answers: [
        { text: "typename...", correct: true },
        { text: "variadic...", correct: false },
        { text: "params...", correct: false },
        { text: "args...", correct: false }
      ],
      explanation: "Variadic templates use typename... (or class...) to indicate a template parameter pack, allowing functions/classes to accept an arbitrary number of template arguments."
    }
  ]
}