import React from "react";
import styled, { keyframes } from "styled-components";

const SkeletonWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;

const SkeletonAnimation = keyframes`
    from {
        background-position: 200%;

    } 
    to{
        background-position: -40px; 
    }
`;

const SkeletonItem = styled.div`
  position: relative;
  text-align: center;
  img {
    border: 1px solid red;
    height: auto;
    font-size: 0;
  }
  p {
    position: absolute;
    transform: rotate(-2deg) translateY(-50%);
    width: 100%;
    left: 0;
  }
  .mark {
    display: inline;
  }
  .loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: ${SkeletonAnimation} 1s infinite linear;
  }
`;

const Skeleton = ({ count }) => {
  return (
    <SkeletonWrapper>
      {Array.from({ length: count }, (_, i) => (
        <SkeletonItem key={i}>
          <p>
            <span className="mark">Loading...</span>
          </p>
          <img
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
            className="loading"
            alt=""
            width="500"
            height="400"
          />
        </SkeletonItem>
      ))}
    </SkeletonWrapper>
  );
};

export default Skeleton;
