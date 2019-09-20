import React from 'react';
import { Svg } from './styles';

export const Logo = (props) => (
  <Svg
    width={386.775}
    height={122.021}
    viewBox="56.613 13.989 386.775 122.021"
    style={{
      background: '0 0',
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient id="prefix__editing-sticker-gradient" x1={0.5} y1={0.2} x2={0.5} y2={0.8}>
        <stop offset={0} stopColor="#fd9" />
        <stop offset={1} stopColor="#9df" />
      </linearGradient>
      <filter id="prefix__editing-sticker" x="-100%" y="-100%" width="300%" height="300%">
        <feMorphology radius={1} in="SourceAlpha" result="alpha-erode" />
        <feConvolveMatrix
          order="3,3"
          divisor={1}
          kernelMatrix="0 1 0 1 1 1 0 1 0"
          in="alpha-erode"
          result="alpha-round"
        />
        <feMorphology operator="dilate" radius={3.5} in="alpha-round" result="dilate-shadow" />
        <feGaussianBlur in="dilate-shadow" stdDeviation={1.5} result="shadow" />
        <feFlood floodColor="#fff" result="flood-sticker" />
        <feComposite operator="in" in="flood-sticker" in2="alpha-round" result="comp-sticker" />
        <feMorphology operator="dilate" radius={3} in="comp-sticker" result="morph-sticker" />
        <feConvolveMatrix
          order="3,3"
          divisor={1}
          kernelMatrix="0 1 0 1 1 1 0 1 0"
          in="morph-sticker"
          result="sticker"
        />
        <feMerge>
          <feMergeNode in="shadow" />
          <feMergeNode in="sticker" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M31-4.4q-2.8 2.7-6.5 4.2-3.6 1.5-7.3 1.5-3.6 0-5-.7l-1.9 11-13 1.2 8.8-45.4 10.5-1.1-.9 4.4Q18.4-34 24-34q6.3 0 9.6 4 3 3.7 3 9.3 0 5.6-1.5 9.5-1.5 4-4.2 6.7zm-14.6-18L13.1-3.5q1.3 1.2 3 1.2 1.6 0 2.6-.7 1-.6 1.7-1.9 1.9-3.4 3.4-14 .5-3 .5-6t-.7-4q-.7-1-2-1-3.9 0-5.2 7.7zm49.9 11.6q1.6 1 1.6 3.5 0 2.4-1.2 4Q65.5-2 63.5-.9q-4.1 2-8.5 2t-7-.9q-2.6-1-4.4-2.7-3.3-3.4-3.3-9.6 0-9.7 5.2-15.6Q51.1-34 60.9-34q6.1 0 9.1 2.5 2.3 2 2.3 5.1Q72.3-15 52.8-15q-.3 1.6-.3 3 0 3 1.4 4.1 1.3 1.1 3.7 1.1 2.4 0 5-1.1t3.7-3zm-13-7q4.5 0 7.1-2.8 2.6-2.7 2.6-7 0-1.5-.5-2.3-.5-.8-1.6-.8t-2 .5q-1 .4-2 1.8-2.3 3.2-3.6 10.6zM75.5-6.4q0-1.7.8-6l3.4-17.4H76l.2-1.9q7.7-2.3 15.1-8h3.1l-1.5 7h5l-.6 3h-5l-3.2 17.2q-.8 4-.8 5.3 0 3.1 2.6 3.7Q90.3-1.3 88 0q-2.3 1.3-5.6 1.3-3.2 0-5-2-2-2.1-2-5.7zm51.2-27.5q-5.2 0-9-1.8l-2 10.4H128q0 3.4-1.7 5.6-1.7 2.1-4.8 2.1-3.3 0-6.4-1.2l-.7-.3L110.8 0h-14l8.2-42.2h28.5q0 3.9-1.8 6-1.8 2.3-5 2.3zm7.5 32q-1.5-1.7-2.1-4.3-.7-2.6-.7-7 0-4.2 1.5-8.1 1.4-4 4.1-6.7 5.5-6 14.6-6 3.3 0 5.7 1.2l10.9-1.1-4.7 25q-.2.7-.2 2.1 0 1.4.8 2.3.9 1 2.2 1-.7 2.2-3 3.5-2.3 1.3-5 1.3-2.6 0-4.4-1-1.7-1-2.2-2.7-1 1.6-3.2 2.7-2.2 1-5.1 1-3 0-5.3-.8-2.4-.8-3.9-2.4zm13.5-26q-.7 1.1-1.3 3.1-.7 2-1.7 7.2t-1 8.9q0 3.7.5 4.8.6 1 1.6 1 2 0 3.5-1.9 1.5-2 2.1-5.4l3.4-18.7q-1.3-1.2-2.9-1.2-1.6 0-2.5.5-1 .5-1.7 1.7zm55.1 1.3q0 2.7-2.2 4.3-2.3 1.7-6 1.7-1.4 0-2.3-.5.7-1.6.9-3.7l.2-2.7q0-2.6-1.8-2.6-1.3 0-2.8 1.6-1.4 1.6-2.6 4-2.7 5.8-2.7 11.6 0 3.2 1.2 4.7 1.2 1.4 4 1.4 3.6 0 6.6-3 .8-1 1.2-2.1 2.5 1.3 2.5 4.8 0 3.6-4 6t-10.6 2.4q-13 0-13-13.8 0-10 5.7-15.8 5.5-5.6 15.6-5.6t10.1 7.3zm27.7 15.8q1.6 1 1.6 3.5 0 2.4-1.3 4-1.2 1.4-3.2 2.5-4 2-8.5 2-4.4 0-7-.9-2.6-1-4.3-2.7-3.4-3.4-3.4-9.6 0-9.7 5.3-15.6 5.6-6.3 15.4-6.3 6 0 9 2.5 2.3 2 2.3 5.1Q236.4-15 217-15q-.3 1.6-.3 3 0 3 1.3 4.1 1.3 1.1 3.8 1.1 2.4 0 5-1.1t3.7-3zm-13-7q4.4 0 7-2.8 2.7-2.7 2.7-7 0-1.5-.5-2.3-.6-.8-1.7-.8-1 0-2 .5-1 .4-1.9 1.8-2.3 3.2-3.7 10.6z"
      fill="url(#prefix__editing-sticker-gradient)"
      stroke="#000"
      strokeWidth={2.5}
      transform="translate(131.8 102)"
      filter="url(#prefix__editing-sticker)"
    />
    <style />
  </Svg>
);
