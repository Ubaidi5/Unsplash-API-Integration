import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { loadImages } from '../../action';
import Stats from '../stats/stats';

const ImageGrid = props => {
    useEffect(() => {
        props.loadImages;
    }, []);

    const { images, error, imageStats } = props;
    return (
        <div className="content">
            <section className="grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className={`item item-${Math.ceil(
                            image.height / image.width,
                        )}`}
                    >
                        <Stats stats={imageStats[image.id]} />
                        <img src={image.urls.small} alt={image.user.username} />
                    </div>
                ))}
            </section>
            <button
                onClick={props.loadImages}
                style={{
                    cursor: 'pointer',
                    padding: '10px 30px',
                    border: 'none',
                    borderRadius: '5px',
                    background: 'rgba(10,200,0,0.5)',
                    color: 'whitesmoke',
                    marginTop: '10px',
                    outline: 'none',
                }}
            >
                Load Image
            </button>
            {error && <div className="error">{JSON.stringify(error)}</div>}
        </div>
    );
};

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
});
const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
