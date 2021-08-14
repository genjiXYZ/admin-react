/*
 * @Author: your name
 * @Date: 2021-08-13 18:48:49
 * @LastEditTime: 2021-08-14 12:44:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-test-app/src/App.tsx
 */
import React, { useState } from "react";
import { Button } from "antd";
import "./styles/App.less";


import Sider from '@/Layout/Sider/Sider'


function App() {
  const [Flag, setFlag] = useState(false);

  return (
    <div className="App  h-screen w-full bg-lly_bg  border-8 ">


  
     
    <Sider/>
    </div>
  );  
}

export default App;
