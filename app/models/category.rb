class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '基礎について' },
    { id: 3, name: '譜面について' },
    { id: 4, name: '音の種類について' },
    { id: 5, name: '和音について' },
    { id: 6, name: 'ピアノ、コーラスについて' },
    { id: 7, name: '金管楽器について' },
    { id: 8, name: '木管楽器について' },
    { id: 9, name: '弦楽器について' },
    { id: 10, name: '打楽器について' },
    { id: 11, name: 'その他の楽器について' },
    { id: 12, name: '豆知識' },
    { id: 13, name: 'その他' }
  ]
  end