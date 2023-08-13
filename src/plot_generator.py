import matplotlib.pyplot as plt
import io
import base64
from multiprocessing import Process, Queue


def generate_plot():
    x = [1, 2, 3, 4, 5]
    y = [10, 15, 7, 12, 9]
    plt.plot(x, y)
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')
    plt.title('Sample Plot')

    image_stream = io.BytesIO()
    plt.savefig(image_stream, format='png')
    image_stream.seek(0)

    img_base64 = base64.b64encode(image_stream.read()).decode()

    return img_base64
