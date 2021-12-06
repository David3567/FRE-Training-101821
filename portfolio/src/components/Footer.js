

const Footer = () => {

    return(
        <footer>
        <div class="row">

            <div class="col-six tab-full pull-right social">

                <ul class="footer-social">        
                 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                 <li><a href="#"><i class="fa fa-behance"></i></a></li>
                 <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                 <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                 <li><a href="#"><i class="fa fa-instagram"></i></a></li>
              </ul> 
                 
         </div>

         <div class="col-six tab-full">
             <div class="copyright">
                   <span>© Copyright Kards 2016.</span> 
                   <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>	         	
                </div>		                  
             </div>

             <div id="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-long-arrow-up"></i></a>
             </div>

         </div>
  </footer>  
    );
}

export default Footer;