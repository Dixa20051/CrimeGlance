import React,{useState} from 'react'
import Navbar from "./AdminNavbar";
import Footer from "./AdminFooter";

function AdminCrimeDistribution() {
  const [states,setStates]=useState('')
  const [year,setYear]=useState('')
  const changeBackground=(e) => {
    e.target.style.background = 'rgb(255,241,122)';
    e.target.style.color = 'red';

  };

  const changeBackgroundOut=(e) => {
    e.target.style.background = 'wheat';
    e.target.style.color = 'red';

  };
  function result(){
    let chart = document.getElementById("chart");
    let map = document.getElementsByClassName("map");
  
  //Andaman and Nicobar
  if (states==="Andaman and Nicobar" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/AN.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andaman and Nicobar" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/AN.jpeg' alt=' ' width=100% height=460>";
  } 
   //Andhra Pradesh
   if (states==="Andhra Pradesh" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Andhra Pradesh" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/andhra.jpeg' alt=' ' width=100% height=460>";
  } 
   //Arunachal Pradesh
   if (states==="Arunachal Pradesh" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Arunachal Pradesh" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/arunachal.jpeg' alt=' ' width=100% height=460>";
  } 
   
   //Assam
   if (states==="Assam" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/assam.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Assam" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/assam.jpeg' alt=' ' width=100% height=460>";
  } 
   //Bihar
   if (states==="Bihar" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Bihar" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/bihar.jpeg' alt=' ' width=100% height=460>";
  } 
   //Chhatisgarh
   if (states==="Chhatisgarh" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Chhatisgarh" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/chattisgarh.jpeg' alt=' ' width=100% height=460>";
  } 
   //Goa
   if (states==="Goa" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/goa.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Goa" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/goa.jpeg' alt=' ' width=100% height=460>";
  } 
   //Gujarat
  if (states==="Gujarat" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Gujarat" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/gujarat.jpeg' alt=' ' width=100% height=460>";
  } 
   //Haryana
   if (states==="Haryana" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Haryana" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/haryana.jpeg' alt=' ' width=100% height=460>";
  } 
   //Himachal Pradesh
   if (states==="Himachal Pradesh" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Himachal Pradesh" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/himachal.jpeg' alt=' ' width=100% height=460>";
  } 
   //Jharkhand
   if (states==="Jharkhand" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jharkhand" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/jharkhand.jpeg' alt=' ' width=100% height=460>";
  } 
   //Jammu and Kashmir
   if (states==="Jammu and Kashmir" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/JK.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Jammu and Kashmir" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/JK.jpeg' alt=' ' width=100% height=460>";
  } 
   //Karnataka
   if (states==="Karnataka" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Karnataka" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/karnataka.jpeg' alt=' ' width=100% height=460>";
  } 
   //Kerala
   if (states==="Kerala" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Kerala" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/kerala.jpeg' alt=' ' width=100% height=460>";
  } 
   //Lakshadweep
   if (states==="Lakshadweep" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Lakshadweep" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/lakshadweep.jpeg' alt=' ' width=100% height=460>";
  } 
   //Maharashtra
  if (states==="Maharashtra" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Maharashtra" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/maharashtra.jpeg' alt=' ' width=100% height=460>";
  } 
   //Manipur
  if (states==="Manipur" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Manipur" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/manipur.jpeg' alt=' ' width=100% height=460>";
  } 
   //Meghalaya
   if (states==="Meghalaya" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Meghalaya" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/meghalaya.jpeg' alt=' ' width=100% height=460>";
  } 

   //Mizoram
  if (states==="Mizoram" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Mizoram" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/mizoram.jpeg' alt=' ' width=100% height=460>";
  } 
   //Madhya Pradesh
   if (states==="Madhya Pradesh" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/MP.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Madhya Pradesh" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/MP.jpeg' alt=' ' width=100% height=460>";
  } 

   //Nagaland
  if (states==="Nagaland" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Nagaland" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/nagaland.jpeg' alt=' ' width=100% height=460>";
  } 
   //Odisha
   if (states==="Odisha" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Odisha" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/odisha.jpeg' alt=' ' width=100% height=460>";
  } 
   //Punjab
   if (states==="Punjab" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Punjab" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/punjab.jpeg' alt=' ' width=100% height=460>";
  } 
   //Rajasthan
  if (states==="Rajasthan" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Rajasthan" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/rajasthan.jpeg' alt=' ' width=100% height=460>";
  } 
   //Sikkim
  if (states==="Sikkim" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Sikkim" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/sikkim.jpeg' alt=' ' width=100% height=460>";
  } 
   //Tamil Nadu
   if (states==="Tamil Nadu" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tamil Nadu" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/tamilnadu.jpeg' alt=' ' width=100% height=460>";
  } 

   //Tripura
   if (states==="Tripura" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/tripura.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Tripura" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/tripura.jpeg' alt=' ' width=100% height=460>";
  } 

   //Uttar Pradesh
   if (states==="Uttar Pradesh" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttar Pradesh" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/uttarpradesh.jpeg' alt=' ' width=100% height=460>";
  } 

  //Uttarakhand
  if (states==="Uttarakhand" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="Uttarakhand" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/uttrakhand.jpeg' alt=' ' width=100% height=460>";
  } 

   //West Bengal
   if (states==="West Bengal" && year==="2001") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2001/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2002") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2002/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2003") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2003/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2004") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2004/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2005") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2005/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2006") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2006/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2007") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2007/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2008") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2008/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2009") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2009/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2010") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2010/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2011") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2011/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 
  if (states==="West Bengal" && year==="2012") {
    map[0].style.display = 'none';
    chart.innerHTML = "<img src='./images/2012/westbengal.jpeg' alt=' ' width=100% height=460>";
  } 

   

}

  return (
    <>
    <div className="container-fluid" >

     {/* navbar */}

     <div className="row" ><Navbar></Navbar></div>
    
    <div className="row" style={{backgroundImage:'url(./images/DistributionBackground.avif)'}}>
    <div className='row' style={{fontSize:'35px',color:'rgb(255,247,195)',fontWeight:'bold',marginBottom:'9px',marginTop:'9px'}}><center>Crime Distribution</center></div>
      <div className='col-md-3' >
        <label style={{color:'white',marginRight:'4px'}}>Select State:</label>
      <select onChange={(e)=>{setStates(e.target.value)}}>
        <option>Select State</option>
        <option>Andaman and Nicobar</option>
        <option>Andhra Pradesh</option>
        <option>Arunachal Pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chhatisgarh</option>
        <option>Goa</option>
        <option>Gujarat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jharkhand</option>        
        <option>Jammu and Kashmir</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Lakshadweep</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>       
        <option>Mizoram</option>
        <option>Madhya Pradesh</option>
        <option>Nagaland</option>
        <option>Odisha</option>
        <option>Punjab</option>
        <option>Rajasthan</option>
        <option>Sikkim</option>
        <option>Tamil Nadu</option>
        <option>Tripura</option>
        <option>Uttar Pradesh</option> 
        <option>Uttarakhand</option>       
        <option>West Bengal</option>
      </select><br></br><br></br>
      <label style={{color:'white',marginRight:'8px'}}>Select Year:</label>
      <select onChange={(e)=>{setYear(e.target.value)}}>
        <option>Select Year</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>

      </select><br></br><br></br>
      <button onClick={result}
      style={{
        color:'red', 
        backgroundColor: 'wheat',
         height:'40px',
         width:'90px',
         borderRadius:'90px',
         textAlign:'center'}} onMouseOver={changeBackground} onMouseOut={changeBackgroundOut}
      >Display</button>
      </div>
      <div className='col-md-9'>
        <img className = "map" src='./images/map.webp' alt='' width='100%' height='460' style ={{display:'block'}}></img>
        <p id="chart"></p>
      </div>

      

  </div>


      {/* footer  */}

      <div className="row" style={{backgroundColor:'brown',color:'whitesmoke'}}>
            <Footer></Footer>
        </div>
        </div>
   </>
)
}

export default AdminCrimeDistribution
