import React, { useState } from "react";
import styled from "styled-components";

function ProductImages({ images = [] }) {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main?.url} alt="main" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image?.url}
              alt={image?.filename}
              onClick={() => setMain(images[index])}
              className={`${image?.url === main?.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 450px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
