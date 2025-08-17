function loadJudgeContent(content, user) {
    content.innerHTML = `
        <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
                <h2 class="text-xl font-semibold mb-4">Judge: ${user.name}</h2>
                <div id="pendingResults"></div>
            </div>
        </div>
    `;
    loadPendingJudgments(user.id);
}

async function loadPendingJudgments(judgeId) {
    const { data: competitions, error } = await supabase
        .from('competition_judges')
        .select(`
            competitions (
                id, name,
                participant_competitions!inner (
                    id, code_letter, is_reported,
                    participants (name)
                )
            )
        `)
        .eq('judge_id', judgeId);
    
    // Implementation for entering points and grades
}
