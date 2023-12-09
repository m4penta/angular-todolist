import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataServices {

constructor() {}



  // Lưu trữ dữ liệu vào Local Storage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Truy xuất dữ liệu từ Local Storage
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Xóa mục từ Local Storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Xóa tất cả dữ liệu trong Local Storage
  clear(): void {
    localStorage.clear();



}}
