@echo off
REM ==============================================================================
REM 版本：v1.1.0 | 创建：2026-09-21 12:15 +08:00 | 更新：2026-09-22 11:20 +08:00
REM 脚本用途：AstrologyLib 每日运营与传播日报本地触发脚本
REM ==============================================================================

cd /d "%~dp0\.."
echo [AstrologyLib] Running Daily Operations Dispatcher at %date% %time%...
python scripts\daily_operations_reporter.py

echo [AstrologyLib] Completed successfully.

