import React from 'react'
import Materialcomp from '../components/Materialcomp'
import Navbar from '../components/Navbar';
function Material() {
  return (
    <div>
      <Navbar/>
      <Materialcomp name1="CIVIL" name2="MECHANICAL" name3="IT" desc1="All question papers and materials related to civil.Upload or download the content" desc2="All question papers and materials related to mechanical.Upload or download the content" desc3="All question papers and materials related to IT.Upload or download the content"/>
      <Materialcomp name1="EEE" name2="ECE" name3="CHEMICAL" desc1="All question papers and materials related to EEE.Upload or download the content" desc2="All question papers and materials related to ECE.Upload or download the content" desc3="All question papers and materials related to chemical.Upload or download the content"/>
      <Materialcomp name1="BIO-TECH" name2="CSE" name3="AIDS" desc1="All question papers and materials related to bio-tech.Upload or download the content" desc2="All question papers and materials related to CSE.Upload or download the content" desc3="All question papers and materials related to AIDS.Upload or download the content"/>
    </div>
  )
}

export default Material