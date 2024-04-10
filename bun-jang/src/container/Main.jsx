import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Main = () => {
    return (
        <div style={{ width: '380px', backgroundColor: 'red' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
            <div>
                <div style={{ display: 'flex' }}>
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
                <div>slide</div>
            </div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                        <div>icon</div>
                    </div>
                </div>
                <div>products</div>
            </div>
        </div>
    );
};

export default Main;
