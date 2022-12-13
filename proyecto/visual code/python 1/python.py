import matplotlib.pyplot as plt
from celluloid import Camera
import matplotlib.pyplot as plt
from IPython.display import HTML
from PIL import Image

# Importar imagen
img = Image.open('merry_christmas.bmp')

fig = plt.figure()
camera = Camera(fig)

x_drops_inner_red = []
y_drops_inner_red = []
x_drops_inner_yellow = []
y_drops_inner_yellow = []

x_drops_outer = []
y_drops_outer = []

plt.xticks([], [])
plt.yticks([], [])

red_yellow_inverse_ratio = 2

for iter in range(500): # 250
  num_drops = np.int(100 * (1 + iter / 50))
  red_yellow_inverse_ratio = 2 + np.int(iter /50)

  x_drops = (img.size[0]-1) * np.random.rand(num_drops)
  y_drops = (img.size[1]-1) * np.random.rand(num_drops)

  for i in range(len(x_drops)):
    if np.sum(img.getpixel(( x_drops[i], img.size[1] - y_drops[i]))) / 255 / 3 < 0.5:
      if iter % red_yellow_inverse_ratio == 0:
        x_drops_inner_red.append(x_drops[i])
        y_drops_inner_red.append(y_drops[i])
      else:
        x_drops_inner_yellow.append(x_drops[i])
        y_drops_inner_yellow.append(y_drops[i])
    else:
      x_drops_outer.append(x_drops[i])
      y_drops_outer.append(y_drops[i])

  
  plt.scatter(x_drops_inner_red, y_drops_inner_red, s=1, c='red')  
  plt.scatter(x_drops_inner_yellow, y_drops_inner_yellow, s=1, c='yellow')
  plt.scatter(x_drops_outer, y_drops_outer, s=1, c='blue')
  camera.snap()

animation = camera.animate(interval=50, blit=True)
HTML(animation.to_html5_video())