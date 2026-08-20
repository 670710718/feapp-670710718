import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ทัศนาวัลย์', nickname: 'อั๊ส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
    { id: 2, name: 'ธัญลักษณ์ ', nickname: 'สมชาย',
    major: 'วิศวกรรมคอมพิวเตอร์', favorites: ['ลูกเสือ', 'รัฐศาสตร์'] },
  { id: 3, name: 'vista x vaye', nickname: 'นายสายา',
    major: 'สาขาการแสดง', favorites: ['ป่วย', 'เจ๊ฝน'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;