from PIL import Image, ImageOps
import base64
from io import BytesIO

# Base64 string provided by the user (truncated for brevity)
base64_string = "iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAJGVYSWZJSSoACAAAAAEAPAECAAkAAAAaAAAAAAAAAGltYWdlcnk0AAAnPYy6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBpZRBTsMwEEW/jZC6zA2YJSvOEHbd0SWoXdAblBMAJ4AjZIGAW5AjgGDBjjmC2YFQG74dKyVyKnD5kuXJZPTs74xjINM3AIKemjn0tkKGbAoJEmTKg9xAfg9bgDRNG0E+aPU0kC8hpwUyRJB9HMgrtHLIEEG7VQLB8hCZsnHlugfRe0WmbDuZy/jMcxllWeqD9KaOuyLo6xxbyK7D5RxtTy0gJwtkaqeL3ItDcfDJaEyrY8YK95y2hkwKFPsjuNePn2mTFs4ueNeivdUZ9O56/e5YuPYD2itUc7B1mnfOmoISGCrajh+jgyQaBgXY1J+Th/kOV5ZybjZ2+2ZQgHkr9oplE/wig79IZmW0Wv4P1AHDDkuOI4Kl/UsEu/oNApdLMoS5FBwAAAAASUVORK5CYII="

# Decode the base64 string
image_data = base64.b64decode(base64_string)
image = Image.open(BytesIO(image_data))

# Convert the image to RGBA if not already
image = image.convert("RGBA")

# Change non-transparent pixels to white
data = image.getdata()
new_data = []
for item in data:
    # Change all non-transparent pixels to white (255, 255, 255)
    if item[3] > 0:  # if alpha > 0 (not transparent)
        new_data.append((255, 255, 255, item[3]))  # keep alpha
    else:
        new_data.append(item)  # keep original transparent pixels

# Apply the new data
image.putdata(new_data)

# Save the edited image to a bytes buffer
buffer = BytesIO()
image.save(buffer, format="PNG")

# Encode the new image back to base64
new_base64_image = base64.b64encode(buffer.getvalue()).decode('utf-8')

new_base64_image
