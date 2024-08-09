import React, { useEffect, useState } from 'react';
import styles from "./FixedLayout.module.css";


const FixedLayout = () => {
  const [scrollView, setScrollView] = useState(0);
  const [divData,setDivData]=useState(1);
  const [leftRef,setLeftRef]=useState(null);
  const [exact,setExact]=useState(-1);
  console.log(leftRef)
  // console.log(scrollView)
  // console.log(divData);

  // Function to handle scroll event
  // const onScroll = () => {
  //   const height = document.documentElement.scrollTop;
  //   const contentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //   const scrollData = (height / contentHeight) * 100;
  //   if(scrollData>80&&scrollData<85)
  //   {
  //     // alert("div1")
  //     setDivData(1)
    
  //   }
  //   if(scrollData>95&&scrollData<98)
  //     {
  //       setDivData(2)
  //     }
  //     if(scrollData>99&&scrollData<100)
  //       { 
  //         setDivData(3)
  //       }


  //   setScrollView(scrollData);
  //   // console.log(`Scroll Percentage: ${scrollData}`); // Log the scroll percentage
  // };
  const leftDiv=()=>{
    const left1=document.getElementById("left");
  //  console.log(left1.scrollTop) 
    setLeftRef(left1);
    const mainswing=left1.scrollTop;
    setExact(mainswing);
    if(mainswing>=0&&mainswing<320)
      {
        setDivData(1);
      }
   
    if(mainswing>=320&&mainswing<600)
    {
      setDivData(2);
    }
    if(mainswing>=600&&mainswing<748)
      {
        setDivData(3);
      }

  }

  // useEffect(() => {
  //   // Add event listener for scroll event
  //   window.addEventListener('scroll', onScroll);

  //   // Cleanup function to remove event listener
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);
  useEffect(() => {
    const left=document.getElementById("left");
    // Add event listener for scroll event
    left.addEventListener('scroll', leftDiv);

    // Cleanup function to remove event listener
    return () => {
      left.removeEventListener('scroll', leftDiv);
    };
  }, []);

  return (
    <div className={styles.pp}>
      <div className={styles.container}>
        <div className={styles.left} id="left">
          <div className={styles.content}>
            <div className={styles.h1}>
              <div className={styles.clear}>Clear Your Mind</div>
              <div className={styles.heading}>The fastest way to get tasks out of your head.</div>
              <div className={styles.para}>Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</div>
            </div>
            <div className={styles.h1}>
            <div className={styles.clear}>Focus on what’s important</div>
              <div className={styles.heading}>Reach that mental clarity you’ve been longing for..</div>
              <div className={styles.para}>Your tasks are automatically sorted into Today, Upcoming, and custom filter views to help you prioritize your most important work.</div>
            </div>
            <div className={styles.h1}>
              <div className={styles.clear}>Organize your teamwork, too</div>
              <div className={styles.heading}>Where all your tasks can finally coexist.</div>
              <div className={styles.para}>Give your team a shared space to collaborate and stay on top of it all – alongside but separate from your personal tasks and projects.</div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            {/* Your fixed content here */}
            {divData==1&&<div className={styles.videoContainer}>
      <video  className={styles.video} autoPlay loop muted>
        <source src={"../Video/div1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>}
            {divData==2&&<div className={styles.videoContainer}>
      <video  className={styles.video} autoPlay loop muted>
        <source src={"../Video/div2.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>}
            {divData==3&&<div className={styles.videoContainer}>
      <video  className={styles.video} autoPlay loop muted>
        <source src={"../Video/div3.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedLayout;
