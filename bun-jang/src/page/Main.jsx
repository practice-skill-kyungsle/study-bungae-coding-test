// react library
import { useEffect, useState } from 'react';
// function
import { getProducts } from 'api/productsApi';
// icon
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// style
import 'styles/common.css';
import styles from 'styles/Main.module.css';
// external library
import { useQuery } from '@tanstack/react-query';

const Main = () => {
    // * state

    const [productsDragStartClientX, setProductsDragStartClientX] = useState(0);
    const [transformX, setTransformX] = useState(0);

    // * global data
    const { data: productsList } = useQuery({
        queryKey: 'productsList',
        queryFn: getProducts,
        refetchInterval: 1000 * 60,
    });

    return (
        <>
            <header id={styles['header']} className="display-flex between">
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
                <nav id={styles['navigation']} className="display-flex">
                    <div>
                        <span>추천</span>
                    </div>
                    <div>
                        <span>하이엔드</span>
                    </div>
                    <div>
                        <span>패션랭킹</span>
                    </div>
                </nav>
            </header>
            <main id={styles['main']}>
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
                                Math.ceil(productsList?.length || 0 / 6) * 380,
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
                            width: `${Math.ceil(productsList?.length || 0 / 6) * 380}px`,
                            transform: `translateX(-${transformX}px)`,
                        }}
                    >
                        {new Array(Math.ceil(productsList?.length || 0 / 6))
                            .fill(0)
                            .map((_, index) => (
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
            </main>
        </>
    );
};

export default Main;
