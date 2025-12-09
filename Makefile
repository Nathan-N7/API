BACKEND_DIR = backend
FRONTEND_DIR = frontend

all: install dev

install:
	@echo "📦 Instalando dependências do Backend..."
	cd $(BACKEND_DIR) && npm install
	@echo "📦 Instalando dependências do Frontend..."
	cd $(FRONTEND_DIR) && npm install

run-back:
	@echo "🚀 Iniciando Backend (Fastify)..."
	cd $(BACKEND_DIR) && npm run dev

run-front:
	@echo "🎨 Iniciando Frontend (React)..."
	cd $(FRONTEND_DIR) && npm run dev

dev:
	@echo "⚡ Subindo ambiente completo..."
	@$(MAKE) -j 2 run-back run-front

fclean:
	@echo "🧹 Removendo node_modules..."
	rm -rf $(BACKEND_DIR)/node_modules
	rm -rf $(FRONTEND_DIR)/node_modules
	@echo "✨ Tudo limpo!"

re: fclean all

.PHONY: all install run-back run-front dev fclean re