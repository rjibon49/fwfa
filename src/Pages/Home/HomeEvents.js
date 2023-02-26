import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import parse from 'html-react-parser';
import UseBlogs from '../../hooks/UseBlogs';
import UseEvents from '../../hooks/UseEvents';

const HomeEvents = () => {

    const[evnt] = UseBlogs();
    const [events] = UseEvents();

    return (
        <>
        <Container className='my-5'>
            <div className='text-center'>
                <h2 className='section-title'>Events</h2>
            </div>
            <Row className=''>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className='mb-5 mx-2'>
                        <h3 className='pb-3'>Upcomming Events</h3>
                        {
                            events.map(event => <div className='green-bg' key={event._id}>
                                <Link as={Link} to={`/events`}>
                                    <ReactPlayer 
                                    width='100%'
                                    height='100%'
                                    
                                    url={event.eventImage}
                                    />
                                </Link>
                                <div className=''>
                                    <Link as={Link} to={`/events`} className=''> <h5 className='black-title'>{event.eventName}</h5> </Link>
                                        <div className='pb-3'>
                                             <p className='black-details'>{parse(`${event.undefined.slice(0,348)} ..`)}<Link as={Link} to={`/events`} className='e-link'> Continue Reading</Link></p>
                                        </div>
                                        <div className='pb-4 ps-4'>
                                            <span className='pe-2' style={{fontSize:"10px"}}>Last Date of Registration: {event.eventDate}</span>
                                        </div>
                                </div>
                            </div>).slice(0,1)
                        }
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className=''>
                        <h3 className='pb-4 ms-5'>See All Events</h3>
                        <div className='green-bg py-4 mx-3'>
                        {
                            evnt.map(evn => <div className='p-3 ms-2' key={evn._id}>
                                <Row >
                                    <Col xl={4}> 
                                        <Image src={evn.images} className='images mb-4' />
                                    </Col>
                                    <Col xl={8}>
                                        <div className='pb-3'>
                                        <Link as={Link} to={`/article1`} className=''> <h3 className='recent-title ps-4'>{evn.title.slice(0,25)}</h3></Link>
                                            <div className='pb-1'>
                                                <p className='black-details'>{evn.details.slice(0, 150)}..<Link as={Link} to={`/article1`} className='e-link'> More Details</Link></p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>).slice(1,4)
                            
                        }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        </>
    );
};

export default HomeEvents;








// ==============


{/* <style>
        .dbody {
            padding: 0px; 
            margin: 0px;
        }
        .datebg {
            background: url('https://www.channelionline.com/wp-content/uploads/2022/06/padma-bridge-coundown.jpg') no-repeat;
            background-size: contain; 
            height: 150px; overflow:
             hidden; margin: auto"
        }
        .datenumber {
            position: absolute; 
            left: 3px;
            bottom: 5px;
            padding-bottom: 5px;
            overflow: hidden;
        }
        .spanText {
            color: white;
            font-size: 18px;
            margin: 0px 12px;
        }
        @media (max-width: 1024px) {
  .datenumber {
    left: 5px;
    bottom: 22px;}
.spanText {
    margin: 0px 8px;}
     
        }
        @media (max-width: 768px) {
  .datenumber {
bottom:53px;}
  .spanText {
font-size:12px;
margin: 0px 7px;}
        }
        @media (max-width: 425px) {
  .datebg {background-position:center}
            .datenumber {left:55px;}
.spanText{font-size:18px;
margin:11px}
  
        }
        @media (max-width: 375px) {
  .datenumber{left:30px;
bottom:5px;}
            
  
        }
        @media (max-width: 320px) {
  
            .datenumber {
    left: 3px;
bottom: 5px; }
  
        }

    </style>

<div class="dbody">
    <div class="datebg">
        <div class="datenumber">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span class="ch-span-day ch-gen-dayanimation spanText ">১৫</span>
                        </td>
                        <td>
                            <span class="ch-span-hour ch-gen-houranimation spanText">১৮</span>
                        </td>
                        <td>
                            <span class="ch-span-miniute ch-gen-minuteanimation spanText">২৪</span>
                        </td>
                        <td>
                            <span class="ch-span-second ch-gen-secondanimation spanText">১২</span>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
    </div>
  <script type="text/javascript" id="gwd-init-code">
    (function() {
      var gwdAd = document.getElementById('gwd-ad'); */}

      /**
       * Handles the DOMContentLoaded event. The DOMContentLoaded event is
       * fired when the document has been completely loaded and parsed.
       */
    //   function handleDomContentLoaded(event) {
          
 // The data/time we want to countdown to
    // var countDownDate = new Date("Jun 25, 2022 10:00:0").getTime();

    // Run myfunc every second
    // var myfunc = setInterval(function() {

    // var now = new Date().getTime();
    // var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    // var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // document.getElementsByClassName("ch-span-day ch-gen-dayanimation")[0].innerHTML= en2bn(days);
    // document.getElementsByClassName("ch-span-hour ch-gen-houranimation")[0].innerHTML= en2bn(hours);
    // document.getElementsByClassName("ch-span-miniute ch-gen-minuteanimation")[0].innerHTML= en2bn(minutes);
    // document.getElementsByClassName("ch-span-second ch-gen-secondanimation")[0].innerHTML=en2bn(seconds); ;
        
    // Display the message when countdown is over
//     if (timeleft < 0) {
//         document.getElementsByClassName("ch-span-day ch-gen-dayanimation")[0].innerHTML= en2bn(0);
//                document.getElementsByClassName("ch-span-hour ch-gen-houranimation")[0].innerHTML= en2bn(0);
//                 document.getElementsByClassName("ch-span-miniute ch-gen-minuteanimation")[0].innerHTML= en2bn(0);
//                  document.getElementsByClassName("ch-span-second ch-gen-secondanimation")[0].innerHTML=en2bn(0); ;
//     }
//     }, 1000);


// function en2bn(str) {
//           str = String(str);
//           const banglaNumber = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', 'ঃ'];
//           const englishNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':'];
//           for (var i = 0; i < banglaNumber.length; i++) {
//             str = str.replaceAll(englishNumber[i], banglaNumber[i]);
//           }
//           return str;
//         }
//       }

      /**
       * Handles the WebComponentsReady event. This event is fired when all
       * custom elements have been registered and upgraded.
       */
    //   function handleWebComponentsReady(event) {
    //     // Start the Ad lifecycle.
    //     setTimeout(function() {
    //       gwdAd.initAd();
    //     }, 0);
    //   }

      /**
       * Handles the event that is dispatched after the Ad has been
       * initialized and before the default page of the Ad is shown.
       */
//       function handleAdInitialized(event) {}

//       window.addEventListener('DOMContentLoaded',
//         handleDomContentLoaded, false);
//       window.addEventListener('WebComponentsReady',
//         handleWebComponentsReady, false);
//       window.addEventListener('adinitialized',
//         handleAdInitialized, false);
//     })();
//   </script>
// </div>