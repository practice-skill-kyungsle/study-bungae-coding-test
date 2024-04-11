import { useEffect, useState } from 'react';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../styles/common.css';
import styles from '../styles/Main.module.css';

const Main = () => {
    const [mainContentsList, setMainContentsList] = useState([]);
    const [mainContentsPage, setMainContentsPage] = useState(0); // 0, 1, 2
    const getMainContents = async () => {
        const response = await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year',
        );
        const json = await response.json();
        console.log(json);

        return json?.data?.movies || [];
    };

    useEffect(() => {
        getMainContents().then((res) => setMainContentsList(res));
    }, []);

    return (
        <div id={styles.main}>
            <div id={styles.header} className="display-flex between">
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
            <div id={styles.categories} className="display-flex">
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
            <div id={styles.contents}>
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
                <div>
                    {/* 모든 상품을 늘어놓아야 하는데, 6개식 잘라야 한다 */}
                    {/* 상품 6개를 감싸는 큰 덩이는 전채개수에서 6을 나눈 몫만큼 존재*/}
                    {/*  */}
                    <div
                        id={styles.viewer}
                        className="display-flex"
                        style={{ width: `${Math.ceil(mainContentsList.length / 6) * 380}px` }}
                    >
                        {new Array(Math.ceil(mainContentsList.length / 6))
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    className={styles['contents-box']}
                                    key={'main-contents-box' + index}
                                >
                                    {mainContentsList
                                        .slice(index * 6, index * 6 + 6)
                                        .map((item) => (
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
