import {
  Image,
  Box
} from "@chakra-ui/react";


export default function SlideShow() {

    return(
        <>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="item active">
      <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/astro25-ch_content.jpg" alt="Los Angeles"/>
    </div>

    <div class="item">
      <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/tanah-tumpahnya-darah-kita.jpg" alt="Chicago"/>
    </div>

    <div class="item">
      <img src="https://resizer-acm.eco.astro.com.my/tr:w-560/https://dj7fdt04hl8tv.cloudfront.net/acm/media/contenthub/hero-banner/must-watch/the-hotel.jpg" alt="New York"/>
    </div>
  </div>

  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


             </>   );

                }