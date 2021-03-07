import React, { Fragment, useState } from 'react';
import { TileContainer } from './styles.js';
import {
  ResponseContainer, ReviewContainer,
  TopRow, Stars, UserAndDate, Summary, Body, Recommend, Helpful, ImageContainer
} from './tileStyles.js';
import StarRating from '../../../../components/StarRating';
import NameDate from '../../../../components/NameDate';

const Tile = ({
  body, summary, response, user, date, helpfulness, rating, recommend, images
}) => {
  const [more, showMore] = useState(false);

  // render images
  const renderImages = (data) => data.map((img, index) => <img key={index} alt="comment pics" className="img" src={img.url} />);

  return (
    <TileContainer id="tile">
      {/* container for the top part */}
      <TopRow>
        <Stars><StarRating rating={rating} /></Stars>
        <UserAndDate>
          <NameDate name={user} date={date} />
        </UserAndDate>
      </TopRow>
      <ReviewContainer>
        <Summary>
          {summary}
        </Summary>
        <Body>
          {body
            && body.length > 250 && !more
            ? (
              <>
                {body.slice(0, 250)}
                <span onClick={() => showMore(true)} className="showMore"> Show More</span>
              </>
            )
            : body}
        <ImageContainer>
          {images && renderImages(images)}
        </ImageContainer>
        </Body>
        {recommend
        && (
        <Recommend>
          <i className="fas fa-check" />
          I recommend this product
        </Recommend>
        )}
        <ResponseContainer>
          <span>Response: </span>
          <p>{response}</p>
        </ResponseContainer>
        <Helpful>
          Was this helpful?
          {' '}
          <span>Yes</span>
          {' '}
          (
          {helpfulness}
          )
          {' '}
          {' '}
          |
          {' '}
          {' '}
          <span>Report</span>
        </Helpful>
      </ReviewContainer>
    </TileContainer>
  );
};

export default Tile;
