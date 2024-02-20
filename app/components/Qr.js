"use client";
import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
export default function QrCode() {
  const qrcodeRef = useRef(null);
  const [qrcode, setQrcode] = useState("");
  const handleChange = (event) => {
    setQrcode(event.target.value ? event.target.value : "");
  };
  return (
    <div className="flex flex-col gap-4 mx-16">
      <h1 className="title">Restaurant qr code Menu</h1>
      <input type="text" placeholder="type here" onChange={handleChange} />
      <QRCodeSVG value={qrcode} size="250" fgColor="#000" ref={qrcodeRef} />
    </div>
  );
}
