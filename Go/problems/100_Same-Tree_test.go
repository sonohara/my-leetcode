package problems

import "testing"

func Test_isSameTree(t *testing.T) {
	type args struct {
		p *TreeNode
		q *TreeNode
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{
			name: "Example1",
			args: args{
				p: &TreeNode{1, &TreeNode{2, nil, nil}, &TreeNode{3, nil, nil}},
				q: &TreeNode{1, &TreeNode{2, nil, nil}, &TreeNode{3, nil, nil}},
			},
			want: true,
		},
		{
			name: "Example2",
			args: args{
				p: &TreeNode{1, &TreeNode{2, nil, nil}, nil},
				q: &TreeNode{1, nil, &TreeNode{2, nil, nil}},
			},
			want: false,
		},
		{
			name: "Example3",
			args: args{
				p: &TreeNode{1, &TreeNode{2, nil, nil}, &TreeNode{1, nil, nil}},
				q: &TreeNode{1, &TreeNode{1, nil, nil}, &TreeNode{2, nil, nil}},
			},
			want: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isSameTree(tt.args.p, tt.args.q); got != tt.want {
				t.Errorf("isSameTree() = %v, want %v", got, tt.want)
			}
		})
	}
}
