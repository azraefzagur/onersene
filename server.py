"""Local discovery demo for the HTML/JavaScript frontend."""

import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "5050"))

CATEGORIES = [
    {"id": 1, "name": "Restoran", "mapIcon": "restaurant", "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80"},
    {"id": 2, "name": "Kafe", "mapIcon": "coffee", "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=500&q=80"},
    {"id": 7, "name": "Market", "mapIcon": "cart", "image": "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=500&q=80"},
    {"id": 8, "name": "Eczane", "mapIcon": "medical", "image": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=500&q=80"},
]
BUSINESSES = [
    {"id": 1, "name": "Mavi Kafe", "categoryId": 2, "categoryName": "Kafe", "latitude": 41.0422, "longitude": 29.0073, "address": "Beşiktaş, İstanbul", "rating": 4.8, "description": "Sakin bir çalışma ortamı ve kahve"},
    {"id": 2, "name": "Lezzet Meydanı", "categoryId": 1, "categoryName": "Restoran", "latitude": 41.0351, "longitude": 28.9842, "address": "Beyoğlu, İstanbul", "rating": 4.6, "description": "Günlük menü ve yöresel lezzetler"},
    {"id": 3, "name": "Şehir Market", "categoryId": 7, "categoryName": "Market", "latitude": 41.0545, "longitude": 29.0240, "address": "Üsküdar, İstanbul", "rating": 4.3, "description": "Temel ihtiyaçlar için yakın market"},
]


class Handler(BaseHTTPRequestHandler):
    def send_json(self, status, value):
        body = json.dumps(value, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        query = parse_qs(parsed.query)
        if path.startswith("/api/"):
            if path == "/api/categories":
                return self.send_json(200, CATEGORIES)
            if path in ("/api/businesses", "/api/businesses/search"):
                items = BUSINESSES
                category_id = query.get("categoryId", [None])[0]
                if category_id is not None:
                    items = [b for b in items if str(b["categoryId"]) == category_id]
                term = (query.get("q") or query.get("search") or [""])[0].strip().casefold()
                if term:
                    items = [b for b in items if term in (b["name"] + " " + b["categoryName"] + " " + b["address"]).casefold()]
                if path.endswith("/search"):
                    total = len(items)
                    try:
                        page = max(1, int(query.get("page", [1])[0]))
                        size = min(100, max(1, int(query.get("pageSize", [12])[0])))
                    except ValueError:
                        return self.send_json(400, {"message": "Geçersiz sayfalama"})
                    start = (page - 1) * size
                    return self.send_json(200, {"items": items[start:start + size], "total": total})
                return self.send_json(200, items)
            if path.startswith("/api/businesses/") and path.rsplit("/", 1)[-1].isdigit():
                business_id = int(path.rsplit("/", 1)[-1])
                business = next((b for b in BUSINESSES if b["id"] == business_id), None)
                return self.send_json(200, business) if business else self.send_json(404, {"message": "İşletme bulunamadı"})
            if path == "/api/locations/cities":
                return self.send_json(200, [{"id": 1, "name": "İstanbul"}])
            if path == "/api/locations/cities/1/districts":
                return self.send_json(200, [{"id": 1, "name": "Beşiktaş"}, {"id": 2, "name": "Beyoğlu"}, {"id": 3, "name": "Üsküdar"}])
            if path == "/api/locations/districts/1/neighborhoods":
                return self.send_json(200, [{"id": 1, "name": "Çarşı"}])
            if path == "/api/locations/cities/1/tax-offices":
                return self.send_json(200, [{"id": 1, "name": "Beşiktaş Vergi Dairesi"}])
            if path in ("/api/campaigns", "/api/visits/frequent"):
                return self.send_json(200, [])
            if path == "/api/yeri/status":
                return self.send_json(200, {"status": "unavailable", "errorCode": "DEMO_ONLY"})
            if path.startswith("/api/auth/me"):
                return self.send_json(401, {"message": "Oturum açılmadı"})
            return self.send_json(404, {"message": "Bu API demo sunucusunda bulunmuyor"})

        public_files = {"/app.js", "/i18n.js", "/style.css", "/index.html", "/brand-logo-light.png", "/brand-logo-dark.png"}
        spa_routes = {"/", "/auth", "/categories", "/campaigns", "/business-detail", "/profile", "/profile.html", "/ai-chat", "/business-profile", "/business-campaigns", "/menu"}
        if path in public_files:
            file_path = ROOT / path.lstrip("/")
        elif path in spa_routes:
            file_path = ROOT / "index.html"
        else:
            return self.send_json(404, {"message": "Dosya bulunamadı"})
        try:
            body = file_path.read_bytes()
        except FileNotFoundError:
            return self.send_json(404, {"message": "Dosya bulunamadı"})
        content_type = {".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".png": "image/png"}[file_path.suffix]
        self.send_response(200)
        self.send_header("Content-Type", content_type if file_path.suffix == ".png" else content_type + "; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        self.send_json(501, {"message": "Bu özellik için gerçek backend gerekli"})

    do_PUT = do_POST
    do_DELETE = do_POST


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"Önersene yerel demo: http://127.0.0.1:{PORT}", flush=True)
    server.serve_forever()
