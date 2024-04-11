import { useEffect, useState } from 'react';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/common.css'; //TODO 절대 경로로 바꾸기
import styles from '../styles/Main.module.css';

const Main = () => {
    const [productsList, setProductsList] = useState([]);
    const [productsDragStartClientX, setProductsDragStartClientX] = useState(0);
    const [transformX, setTransformX] = useState(0);

    const getMainContents = async () => {
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year',
        );
        const json = await response.json();

        return json?.data?.movies || [];
    };

    useEffect(() => {
        getMainContents().then((res) => setProductsList(res));
    }, []);

    return (
        <div id={styles['main']}>
            <div id={styles['header']} className="display-flex between">
                <div style={{ display: 'flex' }}>
                    <div>
                        <BoltOutlinedIcon />
                    </div>
                    <span>번개장터</span>
                </div>
                <div style={{ display: 'flex' }}>
                    <div>
                        <button
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                background: 'none',
                                border: 'none',
                            }}
                        >
                            <SearchOutlinedIcon />
                        </button>
                    </div>
                    <div>
                        <button
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                background: 'none',
                                border: 'none',
                            }}
                        >
                            <NotificationsNoneOutlinedIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div id={styles['categories']} className="display-flex">
                <div>
                    <span>추천</span>
                </div>
                <div>
                    <span>하이엔드</span>
                </div>
                <div>
                    <span>패션랭킹</span>
                </div>
            </div>
            <div id="dummy">dummy</div>
            <div id={styles['products']}>
                <div className="display-flex between">
                    <div>
                        <p style={{ textAlign: 'left' }}>가품 걱정 없는</p>
                        <p style={{ textAlign: 'left' }}>인기 프리미엄 상품</p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                        }}
                    >
                        <div>
                            <span>더보기</span>
                        </div>
                        <div>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                </div>
                <div
                    id={styles['slide-wrapper']}
                    onDragStart={(e) => {
                        setProductsDragStartClientX(e.clientX);
                    }}
                    onDrag={(e) => {
                        setTransformX((prev) =>
                            Math.min(
                                Math.max(
                                    prev + Math.floor((productsDragStartClientX - e.clientX) / 20),
                                    0,
                                ),
                                Math.ceil(productsList.length / 6) * 380,
                            ),
                        );
                    }}
                    onDragEnd={() => {
                        setProductsDragStartClientX(0);
                    }}
                    draggable="false"
                >
                    <div
                        id={styles['contents-wrapper']}
                        className="display-flex"
                        style={{
                            width: `${Math.ceil(productsList.length / 6) * 380}px`,
                            transform: `translateX(-${transformX}px)`,
                        }}
                    >
                        {new Array(Math.ceil(productsList.length / 6)).fill(0).map((_, index) => (
                            <div className={styles['grid-wrapper']} key={'grid-box' + index}>
                                {productsList.slice(index * 6, index * 6 + 6).map((item) => (
                                    <div className={styles.content} key={item.id}>
                                        <div>
                                            <img
                                                className={styles['content-img']}
                                                src={item.background_image_original}
                                                alt="none"
                                            />
                                        </div>
                                        <p>{item.title}</p>
                                        <p>{item.date_uploaded}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
