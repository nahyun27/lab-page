import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(37.296766, 126.836320);
  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: 4 // 지도의 확대 레벨
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    const marker = new kakao.maps.Marker({ position });// 마커 생성

    // 커스텀 오버레이에 표출될 내용
    const content =     `<div class="customoverlay">
    <a href="https://map.kakao.com/?urlX=463700&urlY=1054951&urlLevel=3&itemId=26973368&q=%ED%95%9C%EC%96%91%EB%8C%80%ED%95%99%EA%B5%90%20%EC%A0%9C4%EA%B3%B5%ED%95%99%EA%B4%80&srcid=26973368&map_type=TYPE_MAP" target="_blank">
      <p class="title">Here!</p>
    </a></div>`

    // 커스텀 오버레이 생성
    new kakao.maps.CustomOverlay({
      map,
      position,
      content
    });

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(map);

  });

  return (
    <div
      id="map"
      ref={mapContainer}
      className='map'
    ></div>
  );
};

export default Map;