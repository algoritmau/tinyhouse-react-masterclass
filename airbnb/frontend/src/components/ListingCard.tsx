import { IListingCard } from 'lib/types'
import { truncateString } from 'lib/utils/truncateString'

export const ListingCard = ({
  title,
  description,
  roomType,
  imageUri,
  city,
  reviewsCount,
  reviewsAverage,
  price
}: IListingCard) => {
  const sanitizedDescription = `${description.split('.')[0]}.`
  const defaultDescription =
    'This place has everything you need for a pleasant and enjoyable stay.'

  return (
    <article className="listing-card-wrapper" tabIndex={0}>
      <div className="listing-card">
        <div className="listing-card__visual" tabIndex={0}>
          <figure className="listing-card__image-wrapper">
            <img src={imageUri} alt={title} className="listing-card__image" />
          </figure>
          <span className="listing-card__city">{city}</span>
        </div>
        <div className="listing-card__details" tabIndex={0}>
          <div className="listing-card__header">
            <p
              className="listing-card__subtitle"
              tabIndex={0}
            >{`${roomType} in ${city}`}</p>
            <h3 className="listing-card__title" tabIndex={0}>
              {title}
            </h3>
            <p className="listing-card__description" tabIndex={0}>
              {description
                ? truncateString(sanitizedDescription)
                : defaultDescription}
            </p>
          </div>
          <div className="listing-card__footer">
            <p className="listing-card__reviews" tabIndex={0}>
              {reviewsCount ? (
                <>
                  <span className="listing-card__reviews__average">
                    {reviewsAverage ? `${reviewsAverage / 10}/10` : ''}
                  </span>
                  &nbsp;
                  <span className="listing-card__reviews__count__number">{`(${reviewsCount} review${
                    reviewsCount === 1 ? '' : 's'
                  })`}</span>
                </>
              ) : (
                <span>No reviews yet</span>
              )}
            </p>
            <p className="listing-card__price" tabIndex={0}>
              {/* TODO: Fetch price */}
              {/* {price} */}
              Price - TODO!
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
