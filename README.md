# Slider-Lel - Effortless Customization with React Slick

The Slider-Lel is a tailor-made solution to enhance the shopping experience in stores based on the VTEX IO platform. Designed with efficiency in mind, this Slider leverages the React Slick library and provides ease of customization via the Site Editor.

## Key Features

- **VTEX IO Integration:** This Slider seamlessly integrates with stores based on the VTEX IO platform, ensuring a perfect fit and full functionality.

- **React Slick:** We've harnessed the power of the React Slick library to create a highly customizable and responsive Slider, delivering an enhanced shopping experience for your customers.


- **Effortless Customization:** Through the Site Editor, you can easily personalize components such as arrows and dots to align with your store's unique identity.

## Documentation

### Installation

1. **Download the application:**
   Access the application's download location and obtain the necessary file.

2. **Update the vendor in `manifest.json`:**
   Open the `manifest.json` file included in the application package. Locate the "vendor" section and replace it with the corresponding one for your store.

3. **Transfer the `slider-lel` folder:**
   Navigate to the `Styles-Vtex IO` folder and find the folder named `slider-lel`. Make a copy of it.

4. **Incorporate the folder into your storefront:**
   Access the `styles` folder within your storefront. Paste the `slider-lel` folder here. Don't forget to rename the file to `(Store-name).slider-lel`, replacing `(Store-name)` with your store's name.

5. **Install dependencies and link the project**

### Properties

These are the properties that have been used, tested, and adapted in the project. In the scope of development, it's possible to add more properties from React Slick; however, it's important to note that they haven't been tested in this project.

- **nextArrow**
    
    *Type:* Component
    
    *Default:* `<NextArrow />`
    
    *Description:* Next arrow for the slide.

- **prevArrow**
    
    *Type:* Component
    
    *Default:* `<PrevArrow />`
    
    *Description:* Previous arrow for the slide.

- **slidesToShow**
    
    *Type:* Number
    
    *Default:* 1
    
    *Description:* Number of slides to be displayed at once.

- **slidesToScroll**
    
    *Type:* Number
    
    *Default:* 1
    
    *Description:* Number of slides to scroll at a time.

- **speed**
    
    *Type:* Number
    
    *Default:* 500
    
    *Description:* Animation speed for slide transitions in milliseconds.

- **infinite**
    
    *Type:* Boolean
    
    *Default:* True
    
    *Description:* When set to True, the number of slides is unlimited in transitions. For example: if you have a total of 5 slides and reach the last one, it automatically goes to slide number 1 as if it were the 6th, and so on. Works for both directions < >.

- **centerMode**
    
    *Type:* Boolean
    
    *Default:* False
    
    *Description:* Centers the slides on the screen, keeping one in focus. You can also use the property: centerPadding.

- **centerPadding**
    
    *Type:* String
    
    *Default:* ‘50px’
    
    *Description:* This is the space that the slides at the edges will appear when in centerMode.

- **dots**
    
    *Type:* Boolean
    
    *Default:* False
    
    *Description:* Option to display pagination dots.

- **draggable**
    
    *Type:* Boolean
    
    *Default:* True
    
    *Description:* Used only for desktop, this option enables or disables slide "dragging" with the mouse. If disabled, slides can only be navigated using the arrows.

- **autoplay**
    
    *Type:* Boolean
    
    *Default:* False
    
    *Description:* Automatically advances the slides without relying on user actions.

- **autoplaySpeed**
    
    *Type:* Number
    
    *Default:* 3000
    
    *Description:* Time it takes for the slide to execute autoplay, in milliseconds.

- **pauseOnHover**
    
    *Type:* Boolean
    
    *Default:* True
    
    *Description:* If the user hovers over the slide, it automatically pauses the slide (only if autoplay is also active).

- **rtl**
    
    *Type:* Boolean
    
    *Default:* False
    
    *Description:* rtl = Right to left, meaning the slide moves in the opposite direction when autoplay is active, moving from right to left.

- **arrows**
    
    *Type:* Boolean
    
    *Default:* True
    
    *Description:* Enables or disables the slide arrows.





