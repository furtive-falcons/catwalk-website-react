import React, { Fragment, useState } from 'react';
import { TileContainer } from './styles.js';
import {
  ResponseContainer, ReviewContainer,
  TopRow, Stars, UserAndDate, Summary, Body, Recommend, ImageContainer,
} from './tileStyles.js';
import StarRating from '../../../../components/StarRating';
import NameDate from '../../../../components/NameDate';
import Helpful from './Helpful.js';
import ImageModal from '../../../../components/ImagePopUp';
import Paragraph from '../../../../components/Paragraph';

const Tile = ({
  body, summary, response, user, date, helpfulness, rating, recommend, images, review_id,
}) => {
  const [more, showMore] = useState(false);
  const imageUrls = (images) => images.map((image) => image.url);
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
              <Paragraph size={1.3}>
                {body.slice(0, 250)}
                <span onClick={() => showMore(true)} className="showMore"> Show More</span>
              </Paragraph>
            )
            : <Paragraph size={1.3}>{body}</Paragraph>}
          <ImageContainer>
            {/* {images && renderImages(images)} */}
            {images
          && <ImageModal images={imageUrls(images)} />}
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
        <Helpful review_id={review_id} count={helpfulness} />
      </ReviewContainer>
    </TileContainer>
  );
};

export default Tile;
